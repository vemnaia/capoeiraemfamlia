export const ADS_ID = "AW-18000110238";
export const CONSENT_KEY = "capoeira_advertising_consent_v1";
export const NOTICE = {
  version: "2026-10-16-v1",
  text: "Podemos compartilhar com o Google Ads dados de navegação, como páginas visitadas, identificadores de cliques de anúncios (gclid), cookies e informações do dispositivo, para medir anúncios e apoiar sua otimização. Não enviamos e-mail, telefone ou respostas do quiz. A compra é medida pela Kiwify somente após pagamento aprovado. Você pode aceitar ou recusar e mudar sua escolha em Configurações de cookies.",
  choices: ["Aceitar", "Recusar"],
  recipient: "Google Ads (Google)",
  purposes: ["Medição de anúncios", "Otimização de anúncios"],
};
type Choice = { advertising: boolean; at: string; region: string; notice: typeof NOTICE };
type ConsentRecord = { visitorId: string; current: Choice; history: Choice[] };
type AdsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; };
const adsWindow = window as AdsWindow;
let regionPromise: Promise<string> | undefined;
let initialized = false;
const regulated = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE GB CH".split(" "));

export function readConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as ConsentRecord;
    return typeof value.current?.advertising === "boolean" && Array.isArray(value.history) ? value : null;
  } catch { return null; }
}

export function requiresConsent(region: string) {
  return regulated.has(region) || !/^[A-Z]{2}$/.test(region) || region === "XX" || region === "T1";
}

export function getRegion() {
  regionPromise ??= (async () => {
    try {
      const response = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000), credentials: "same-origin" });
      if (!response.ok) return "XX";
      return (await response.text()).match(/^loc=([A-Z0-9]{2})$/m)?.[1] ?? "XX";
    } catch { return "XX"; }
  })();
  return regionPromise;
}

function hasOptOut() {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true || navigator.doNotTrack === "1";
}

export function canTrack(region: string) {
  if (hasOptOut()) return false;
  const saved = readConsent();
  if (saved) return saved.current.advertising;
  return !requiresConsent(region);
}

function gtag(..._args: unknown[]) {
  adsWindow.dataLayer ??= [];
  // Google's command queue requires the Arguments object, not an array.
  // eslint-disable-next-line prefer-rest-params
  adsWindow.dataLayer.push(arguments);
}

export function initializeAdvertising(region: string) {
  if (!canTrack(region) || initialized) return;
  initialized = true;
  // Remove personal identifiers before loading any advertising script.
  const location = new URL(window.location.href);
  for (const key of [...location.searchParams.keys()]) {
    if (/^(email|e-mail|phone|telefone|cpf|name|nome)$/i.test(key)) location.searchParams.delete(key);
  }
  window.history.replaceState(window.history.state, "", location);
  adsWindow.gtag = gtag;
  gtag("consent", "default", {
    ad_storage: "denied", analytics_storage: "denied",
    ad_user_data: "denied", ad_personalization: "denied",
  });
  gtag("consent", "update", { ad_storage: "granted" });
  gtag("set", "allow_ad_personalization_signals", false);
  gtag("js", new Date());
  gtag("config", ADS_ID, {
    allow_enhanced_conversions: false,
    allow_ad_personalization_signals: false,
    page_location: location.toString(),
    page_referrer: document.referrer ? new URL(document.referrer).origin : "",
  });
  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
    document.head.appendChild(script);
  }
}

export function stopAdvertising() {
  // Reload unloads the third-party script; denied signals alone cannot stop transmission.
  if (initialized) window.location.reload();
}

export function saveConsent(advertising: boolean, region: string) {
  const previous = readConsent();
  const current = { advertising, at: new Date().toISOString(), region, notice: NOTICE };
  const record: ConsentRecord = {
    visitorId: previous?.visitorId ?? crypto.randomUUID(),
    current,
    history: [...(previous?.history ?? []), current],
  };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(record)); }
  catch { return false; }
  window.dispatchEvent(new Event("advertising-choice"));
  if (!advertising) stopAdvertising();
  else initializeAdvertising(region);
  return true;
}