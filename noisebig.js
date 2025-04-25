// ► JS noise – redirect POUZE po kliku
(function () {
  const hash   = "{{BUILD_HASH}}";
  const target = "/p/" + hash;

  document.getElementById("vip-btn").addEventListener("click", e => {
    e.preventDefault();
    location.href = target;
  });

  const r = Math.random();
  if (r > 0.94) console.log("k4-big2 noise", r);
})();
