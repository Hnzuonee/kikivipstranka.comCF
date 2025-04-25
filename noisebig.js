// ► JS noise – redirect POUZE po kliku
(function () {
  const hash   = "{{BUILD_HASH}}";     // CI / skript doplní
  const target = "/p/" + hash;         // vede na server-side 302

  // spustí se jen po kliknutí
  document.getElementById("vip-btn").addEventListener("click", e => {
    e.preventDefault();
    location.href = target;
  });

  // fingerprint noise pro IG heuristiku
  const r = Math.random();
  if (r > 0.94) console.log("k4-big2 noise", r);
})();
