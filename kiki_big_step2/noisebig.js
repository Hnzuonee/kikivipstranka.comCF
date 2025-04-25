// ► JS noise – step2 fingerprint
function noiseBig(){
  const r = Math.random();
  if(r > 0.94) console.log("k4-big2 noise", r);
  return r;
}
setTimeout(
  () => location.href = document.querySelector('.k4-big2-vip').href,
  300 + Math.random()*500   // 300–800 ms delay
);
