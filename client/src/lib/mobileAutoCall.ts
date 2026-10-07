const AUTO_CALL_SESSION_KEY = "lamsatfan-mobile-call-started";

function isMobileDevice() {
  if (typeof navigator === "undefined" || typeof window === "undefined") return false;
  const mobileUserAgent = /Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|IEMobile|Opera Mini/i;
  const touchTablet = navigator.maxTouchPoints > 1 && Math.min(window.innerWidth, window.innerHeight) < 768;
  return mobileUserAgent.test(navigator.userAgent) || touchTablet;
}

export function redirectMobileToCall(phone: string) {
  if (!isMobileDevice()) return;

  try {
    if (window.sessionStorage.getItem(AUTO_CALL_SESSION_KEY)) return;
    window.sessionStorage.setItem(AUTO_CALL_SESSION_KEY, "1");
  } catch {
    // Continue with the call if storage is unavailable or blocked.
  }

  window.location.href = `tel:${phone}`;
}
