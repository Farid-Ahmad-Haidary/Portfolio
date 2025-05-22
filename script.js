// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('navbar-default');
  menu.classList.toggle('hidden');
});


var typed = new Typed('.typing', {
strings: ['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,', 'Mobile Apps Developer.'],
typeSpeed: 120,
BackSpeed: 60,
loop: true
})