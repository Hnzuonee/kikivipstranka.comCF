// ► JS noise + redirect to /p/<hash>
(function(){
  const hash = "{{BUILD_HASH}}";
  const target = "/p/" + hash;

  // click handler
  document.getElementById("vip-btn").addEventListener("click", e=>{
    e.preventDefault();
    location.href = target;
  });

  // auto redirect 300–800 ms
  setTimeout(()=>location.href = target,
             300 + Math.random()*500);

  const r = Math.random();
  if(r > 0.94) console.log("k4-big2 noise", r);
})();