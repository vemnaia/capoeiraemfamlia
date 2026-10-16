# Project rules
- Centralize checkout URL construction in a shared helper so every purchase link preserves incoming campaign parameters and existing checkout parameters.
- Keep Google Ads initialization in one consent-controlled browser module, with no conversion event helpers; approved purchases are reported externally by the payment platform.
- Store advertising choices and versioned notice evidence locally in the browser, retaining prior acceptance on withdrawal; synchronize withdrawal across tabs and reload to stop an already-loaded third-party tag.