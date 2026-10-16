import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONSENT_KEY, NOTICE, canTrack, getRegion, initializeAdvertising, readConsent, requiresConsent, saveConsent, stopAdvertising } from "@/lib/advertising";

export function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

const AdvertisingConsent = () => {
  const [region, setRegion] = useState("XX");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    getRegion().then((country) => {
      if (!active) return;
      setRegion(country);
      setOpen(requiresConsent(country) && !readConsent());
      initializeAdvertising(country);
    });
    const show = () => setOpen(true);
    const synchronize = (event: StorageEvent) => {
      if (event.key !== CONSENT_KEY) return;
      if (!canTrack(region)) stopAdvertising();
      else initializeAdvertising(region);
      setOpen(false);
    };
    window.addEventListener("open-cookie-settings", show);
    window.addEventListener("storage", synchronize);
    return () => {
      active = false;
      window.removeEventListener("open-cookie-settings", show);
      window.removeEventListener("storage", synchronize);
    };
  }, [region]);
  const choose = (accept: boolean) => {
    if (saveConsent(accept, region)) { setOpen(false); setError(false); }
    else setError(true);
  };
  if (!open) return null;
  return (
    <aside aria-label="Preferências de publicidade" className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-card text-card-foreground shadow-lg">
      <div className="container mx-auto max-w-4xl px-4 py-5">
        <h2 className="font-display text-xl mb-2">Sua privacidade importa</h2>
        <p className="text-sm text-muted-foreground mb-3">{NOTICE.text}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" onClick={() => choose(false)}>Recusar</Button>
          <Button variant="outline" onClick={() => choose(true)}>Aceitar</Button>
          <Link to="/privacidade" className="text-sm underline text-primary">Política de Privacidade</Link>
          {readConsent() && <Button variant="ghost" onClick={() => setOpen(false)}>Fechar</Button>}
        </div>
        {error && <p role="alert" className="text-sm text-destructive mt-3">Não foi possível salvar sua escolha. A publicidade permanece bloqueada.</p>}
      </div>
    </aside>
  );
};
export default AdvertisingConsent;