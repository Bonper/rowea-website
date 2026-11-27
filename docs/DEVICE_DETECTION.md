# Device Detection Specification — ROWEA Website

## Philosophy

Browser-based OS detection is **best-effort and never 100% accurate**. The ROWEA website uses detection strictly to highlight relevant installation instructions on `/download` and `/installation`:
- **No automatic file downloads**
- **No automatic redirects**
- **Always provides a `Change device` / manual 6-platform override**
- **Falls back to `unknown` + PWA guidance when signals are insufficient or conflicting**

---

## Multi-Signal Evaluation (`src/device-detection/detector.ts`)

Inputs evaluated locally in the browser:
1. `navigator.userAgent`
2. `navigator.userAgentData` (`platform`, `mobile`) where supported
3. `navigator.platform`
4. `navigator.maxTouchPoints`
5. `window.matchMedia('(pointer: coarse)')` and touch event presence

---

## Platform Rules & Edge Cases

### 1. iPadOS vs. macOS
- **Rule**: Never classify iPadOS or macOS from `navigator.platform` alone.
- **iPadOS 13+**: Often reports `platform === "MacIntel"` and a Macintosh User-Agent. When `MacIntel` is paired with `maxTouchPoints > 1` plus Apple/WebKit or coarse-pointer touch signals (without Windows/Linux/Android tokens), ROWEA classifies as `ios` (`iOS / iPadOS`) and recommends Safari PWA.
- **macOS**: Requires desktop macOS User-Agent / Client Hints tokens corroborated with `maxTouchPoints <= 1`.
- **Ambiguous Cases**: Conflicting or platform-only signals yield `unknown` with manual selection.

### 2. Huawei & HarmonyOS Nuance
- **Rule**: **Never** use `HMSCore` as a decisive Huawei OS detection signal.
- **Weak Hints Only**: Browser/vendor tokens (`HuaweiBrowser`, `HarmonyOS`, `EMUI`, `OpenHarmony`, `ArkWeb`, `HUAWEI`/`HONOR`) are treated strictly as weak hints.
- **OS Architecture Distinction**:
  - **EMUI / Android-based HarmonyOS**: Recommends **PWA first**; notes optional Android APK compatibility without assuming Google Mobile Services (GMS).
  - **HarmonyOS NEXT (`OpenHarmony` / `ArkWeb` without `Android`)**: Recommends **PWA** and explicitly warns **not** to assume Android APK compatibility.
  - **Insufficient Confidence**: If only a weak vendor token appears without clear OS signals, falls back to `unknown` + PWA recommendation + manual selection.

### 3. Android, Windows & Linux
- **Android (non-Huawei)**: Recommends Android APK (`Coming Soon` in Phase 1) alongside PWA awareness.
- **Windows / macOS / Linux**: Recommends standards-based Desktop PWA installation.
