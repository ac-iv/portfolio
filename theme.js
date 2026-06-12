// ── shared page behavior ──
const root = document.documentElement;
let curHue = 340, targetHue = 340;
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? window.scrollY / max : 0;
  targetHue = 340 + p * 300;
}, {passive:true});
(function hueLoop(){
  curHue += (targetHue - curHue) * 0.06;
  root.style.setProperty('--hue', (curHue % 360).toFixed(1));
  requestAnimationFrame(hueLoop);
})();

// nav stays visible — static header

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.08});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
