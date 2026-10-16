export const CHECKOUT_URL = "https://pay.kiwify.com.br/OsM3esD";

export function getCheckoutUrl(base = CHECKOUT_URL, search = window.location.search) {
  const checkout = new URL(base);
  const incoming = new URLSearchParams(search);
  const keys = new Set(incoming.keys());
  for (const key of keys) {
    if (key === "gclid" || /^utm_/i.test(key)) {
      if (!checkout.searchParams.has(key)) {
        for (const value of incoming.getAll(key)) checkout.searchParams.append(key, value);
      }
    }
  }
  return checkout.toString();
}