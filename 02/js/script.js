const menuBurger = document.querySelector('.header__menu-burger');
const nav = document.querySelector('.header__nav-list');
const navLink = document.querySelectorAll('.header__nav-link');

const loginBtn = document.querySelector('.header__login-btn');

menuBurger.addEventListener('click', function() {
  menuBurger.classList.toggle('active');
  nav.classList.toggle('active');
  nav.appendChild(loginBtn);
  loginBtn.classList.toggle('active');
  
})

navLink.forEach((el) => el.addEventListener('click', function() {
  menuBurger.classList.remove('active');
  nav.classList.remove('active');
}))