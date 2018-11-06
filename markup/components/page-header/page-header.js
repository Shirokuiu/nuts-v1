const menuBtn = document.querySelector('.page-header .row-top .logo .btn');
const menu = document.querySelector('.page-header .row-bottom');
const exit = menu.querySelector('.container .exit');

menuBtn.addEventListener('click', function () {
  menu.classList.remove('close');
  document.body.style.overflow = 'hidden';
});

exit.addEventListener('click', function () {
  menu.classList.add('close');
  document.body.style.overflow = 'visible';
});
