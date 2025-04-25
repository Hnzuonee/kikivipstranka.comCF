// ► JS noise – redirect POUZE po kliku
(function () {
  const hash   = "{{BUILD_HASH}}";        // doplní CI skript
  const target = "/p/" + hash;            // server-side 302 v _worker.js

  document.getElementById("vip-btn").addEventListener("click", e => {
    e.preventDefault();
    location.href = target;
  });

  const r = Math.random();
  if (r > 0.94) console.log("k4-big2 noise", r);
})();
