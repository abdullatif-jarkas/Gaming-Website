const navbar = document.querySelector('nav');

window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


// Start Burger icon
let menu = document.querySelector('.menu-item');
let span1 = document.querySelector('.one');
let span2 = document.querySelector('.two');
let span3 = document.querySelector('.three');

let navContainer = document.querySelector('.nav-container');

let list = document.querySelector('.list');

menu.addEventListener('click', () => {
    span1.classList.toggle('one-hover');
    span2.classList.toggle('two-hover');
    span3.classList.toggle('three-hover');
    list.classList.toggle('custom-list');
});
// End Burger icon