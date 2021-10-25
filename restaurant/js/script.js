const btnContainer = document.getElementById("nav");
const btns = btnContainer.getElementsByClassName("nav__item");
const btnActive = "nav__item-active";

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName(btnActive);
    current[0].className = current[0].className.replace(` ${btnActive}`, "");
    this.className += ` ${btnActive}`;
  });
}



const header = document.querySelector('.header');
const menuBurger = document.querySelector('.header__menu-burger');
const nav = document.querySelector('.header__menu');
const navLink = document.querySelectorAll('.nav__item');

menuBurger.addEventListener('click', function() {
  menuBurger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('freeze-body');
})

navLink.forEach((el) => el.addEventListener('click', function() {
  menuBurger.classList.remove('active');
  nav.classList.remove('active');
  document.body.classList.remove('freeze-body');
}))