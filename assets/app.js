// Mobile menu toggle
document.addEventListener('click', function(e){
  const t = e.target.closest('.menu-toggle');
  if(t){ document.querySelector('.mobile-nav')?.classList.toggle('open'); }
});
// Smooth external links already handled by CSS scroll-behavior.
