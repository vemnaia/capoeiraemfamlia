import { describe, expect, it } from "vitest";
import { getCheckoutUrl } from "@/lib/checkout";

describe("checkout attribution", () => {
  it("passes gclid and all UTM fields, but no email or other fields", () => {
    const url = new URL(getCheckoutUrl(undefined, "?gclid=test-click&utm_source=google&utm_campaign=familia&utm_content=a&email=test@example.com&other=x"));
    expect(url.origin + url.pathname).toBe("https://pay.kiwify.com.br/OsM3esD");
    expect(url.searchParams.get("gclid")).toBe("test-click");
    expect(url.searchParams.get("utm_campaign")).toBe("familia");
    expect(url.searchParams.has("email")).toBe(false);
    expect(url.searchParams.has("other")).toBe(false);
  });
  it("preserves existing checkout parameters, repeats, and fragments", () => {
    const url = new URL(getCheckoutUrl("https://pay.kiwify.com.br/OsM3esD?coupon=FAMILIA&utm_source=existing#offer", "?utm_source=incoming&utm_term=a&utm_term=b&gclid=click"));
    expect(url.searchParams.get("coupon")).toBe("FAMILIA");
    expect(url.searchParams.get("utm_source")).toBe("existing");
    expect(url.searchParams.getAll("utm_term")).toEqual(["a", "b"]);
    expect(url.hash).toBe("#offer");
  });
});