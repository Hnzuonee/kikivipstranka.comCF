// ► JS noise – pouze fingerprint + redirect AŽ PO KLIKU
(function () {
  const hash   = "{{BUILD_HASH}}";           // CI doplní SHA / timestamp
  const target = "/p/" + hash;               // server-side 302

  // redirect spouštíme jen při kliku
  document
    .getElementById("vip-btn")
    .addEventListener("click", (e) => {
      e.preventDefault();
      location.href = target;
    });

  // fingerprint noise pro IG heuristiku
  const r = Math.random();
  if (r > 0.94) console.log("k4-big2 noise", r);

})();
