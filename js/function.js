// Main navigation
const navBar = document.querySelector('.nav-bar');
const mainNav = document.querySelector('.main-nav');
const menuList = document.querySelector('.menu-list');
const navItem = document.querySelectorAll('.nav-item');
const lineBtn = document.querySelectorAll('.line-btn');
const body = document.body;

let showMenu = false;

navBar.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        navBar.classList.add('close');
        mainNav.classList.add('show');
        menuList.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        lineBtn.forEach(item => item.classList.add('show'));
        showMenu = true;
        body.style.overflowY = 'hidden';
    } else {
        navBar.classList.remove('close');
        mainNav.classList.remove('show');
        menuList.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        lineBtn.forEach(item => item.classList.remove('show'));
        showMenu = false;
        body.style.overflowY = 'scroll';
    }
}

// Slide animation
sal({
    threshold: 0.2,
    once: false,
});

$(document).ready(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('.top-container').addClass('black');
            $('.nav-bar').addClass('white');
            $('.page-style').addClass('black');
        } else {
            $('.top-container').removeClass('black');
            $('.nav-bar').removeClass('white');
            $('.page-style').removeClass('black');
        }
    });
});
