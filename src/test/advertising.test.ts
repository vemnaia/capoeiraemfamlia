import { beforeEach, describe, expect, it } from "vitest";
import { CONSENT_KEY, NOTICE, canTrack, readConsent, requiresConsent, saveConsent } from "@/lib/advertising";

describe("advertising consent", () => {
  beforeEach(() => localStorage.clear());
  it("blocks consent regions and unresolved regions by default", () => {
    for (const region of ["DE", "GB", "CH", "XX", "T1", ""]) {
      expect(requiresConsent(region)).toBe(true);
      expect(canTrack(region)).toBe(false);
    }
    expect(canTrack("BR")).toBe(true);
  });
  it("preserves evidence and honors withdrawal regardless of region", () => {
    // Preexisting acceptance avoids loading third-party code in this unit test.
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ visitorId: "visitor", current: { advertising: true }, history: [{ advertising: true, notice: NOTICE }] }));
    expect(saveConsent(false, "BR")).toBe(true);
    expect(canTrack("BR")).toBe(false);
    expect(canTrack("DE")).toBe(false);
    expect(readConsent()?.history).toHaveLength(2);
    expect(readConsent()?.history[0].advertising).toBe(true);
    expect(readConsent()?.current.notice.version).toBe(NOTICE.version);
    expect(readConsent()?.current.at).toBeTruthy();
  });
});