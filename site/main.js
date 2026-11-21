const CHECKOUT_URL = "https://pay.hotmart.com/H108602514B";
const PIXEL_ID = "XXXX";
const CONSENT_KEY = "tai_chi_cookie_consent";

(function () {
  const banner = document.getElementById("cookie-banner");
  let consent = null;
  try { consent = localStorage.getItem(CONSENT_KEY); } catch (_) { /* Consent can still apply for this visit. */ }

  function loadPixel() {
    if (window.fbq || PIXEL_ID === "XXXX") return;
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];
      t=b.createElement(e);t.async=true;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }
  if (consent === "accepted") loadPixel();
  else if (consent !== "rejected" && banner) banner.hidden = false;

  function choose(value) {
    const wasAccepted = consent === "accepted";
    consent = value;
    try { localStorage.setItem(CONSENT_KEY, value); } catch (_) { /* Keep the choice for this page visit. */ }
    if (banner) banner.hidden = true;
    if (value === "accepted") loadPixel();
    else if (wasAccepted) window.location.reload();
  }
  document.getElementById("accept-cookies")?.addEventListener("click", function () { choose("accepted"); });
  document.getElementById("reject-cookies")?.addEventListener("click", function () { choose("rejected"); });
  document.querySelectorAll(".buy-button").forEach(function (link) {
    link.href = CHECKOUT_URL;
    link.addEventListener("click", function () {
      if (consent === "accepted" && window.fbq) window.fbq('track', 'InitiateCheckout');
    });
  });
  const sticky = document.getElementById("sticky-buy");
  function updateSticky() { if (sticky) sticky.classList.toggle("visible", window.scrollY > 100); }
  window.addEventListener("scroll", updateSticky, { passive: true });
  updateSticky();
  document.querySelectorAll(".cookie-settings").forEach(function (link) {
    link.addEventListener("click", function (event) { event.preventDefault(); if (banner) banner.hidden = false; });
  });
}());
