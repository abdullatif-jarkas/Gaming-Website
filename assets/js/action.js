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

// Start Badge
let Badge = document.querySelector(".badge");
let addBtn1 = document.querySelector(".add-cart1");
let addBtn2 = document.querySelector(".add-cart2");
let addBtn3 = document.querySelector(".add-cart3");
let addBtn4 = document.querySelector(".add-cart4");

let badgeNum = 0;
Badge.innerHTML = badgeNum;

addBtn1.addEventListener('click', () => {
    badgeNum += 1;
    Badge.innerHTML = badgeNum;

});
addBtn2.addEventListener('click', () => {
    badgeNum += 1;
    Badge.innerHTML = badgeNum;
});
addBtn3.addEventListener('click', () => {
    badgeNum += 1;
    Badge.innerHTML = badgeNum;
});
addBtn4.addEventListener('click', () => {
    badgeNum += 1;
    Badge.innerHTML = badgeNum;
});

// End Badge

// start active navbar link
let anchor0 = document.querySelector(".anchor0");
let anchor1 = document.querySelector(".anchor1");
let anchor2 = document.querySelector(".anchor2");
let anchor3 = document.querySelector(".anchor3");

anchor0.addEventListener('click', () => {
    anchor0.classList.add("active");
    anchor1.classList.remove("active");
    anchor2.classList.remove("active");
    anchor3.classList.remove("active");
})
anchor1.addEventListener('click', () => {
    anchor1.classList.add("active");
    anchor0.classList.remove("active");
    anchor2.classList.remove("active");
    anchor3.classList.remove("active");
})
anchor2.addEventListener('click', () => {
    anchor2.classList.add("active");
    anchor0.classList.remove("active");
    anchor1.classList.remove("active");
    anchor3.classList.remove("active");
})
anchor3.addEventListener('click', () => {
    anchor3.classList.add("active");
    anchor0.classList.remove("active");
    anchor1.classList.remove("active");
    anchor2.classList.remove("active");
})

// End active navbar link