/*slider*/ 
$('.hero-slider').slick({
    autoplay: true,
    infinite: false,
    speed: 300,
    nextArrow: $('.next'),
    prevArrow: $('.prev')
})
$('.testimonial-slider').slick({
    autoplay: true,
    infinite: false,
    speed: 300,
    nextArrow: $('.next1'),
    prevArrow: $('.prev1')
})


const header = document.querySelector('header');
function fixedNavbar() {
    header.classListtoggle('scrolled', window.scrollY > 0)
}
fixedNavbar();
window.addEventListener('scroll', fixedNavbar);

let menu = document.querySelector('#menu-btn');
let userBtn = document.querySelector('#user-btn');

menu.addEventListener('click', function() {
    let nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
})

userBtn.addEventListener('click', function() {
    let userBox = document.querySelector('.user-box');
    userBox.classList.toggle('active');
})

const closeBtn = document.querySelector('#close-form');

closeBtn.addEventListener('click',()=>{
    document.querySelector('.update-container').style.display='none'
})