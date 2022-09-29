// ----- Select Elements -----
// For Project Modals
let buttons = document.querySelectorAll('.open-button');
let modals = document.querySelectorAll('.modal-container');

// For Modal slider buttons
let slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelectorAll('.nextBtn');
const prevBtn = document.querySelectorAll('.prevBtn');

// Sticky navbar on scroll
$(document).ready(function() {
 $(window).scroll(function() {
  if(this.scrollY > 15) {
   $('.navbar').addClass("sticky");
  } else {
   $('.navbar').removeClass("sticky");
  }

  // show/hide scroll to top button
  if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
  }else {
    $('.scroll-up-btn').removeClass("show");
  }
 });

// slide-up button functionality:
$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });


 // navbar menu toggle
 $('.menu-btn').click(function() {
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn').toggleClass("active");
 })
})

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Collaborator", "Designer", "Gymnast"],
        typeSpeed: 50,
        backDelay: 1000,
        backSpeed: 60,
        loop: true,
        showCursor: false,
    });
    
    // typing text animation script
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Collaborator", "Designer", "Gymnast"],
        typeSpeed: 50,
        backDelay: 1000,
        backSpeed: 60,
        loop: true,
        showCursor: false,
    });

let slidesArray = [];
let slideShow = [];
// Project Section Modals
function showModal(id) {
  let m = document.getElementById(id);
  m.classList.add('visible');
  slideShow = document.querySelector('.visible').getElementsByClassName("slide");
  slidesArray = [...slideShow];
}

function hideModals() {
  modals.forEach(m => {
    m.classList.remove('visible');
    slidesArray = [];
    counter = 0;
  });
}

buttons.forEach(b => {
  b.addEventListener('click', event => {
    hideModals();
    showModal(b.dataset.modal);
    // showSlides(b.dataset.modal);
  });
});

modals.forEach(m => {
  let x = m.querySelector('button.close');
  x.addEventListener('click', hideModals);
});



// --------------------My attempt--------------------------:

let counter = 0;
nextBtn.forEach(button => {
  button.addEventListener('click', event => {
   counter++;
  carousel();
})
});

prevBtn.forEach(button => {
button.addEventListener('click', function(){
  counter--;
  carousel();
})
});

function carousel(){
  slidesArray.forEach(function(slide, index){
  slide.style.left = `${index * 100}%`; // translate slide 100% left
});

 // working with slideShow
 if(counter === slidesArray.length){
  counter=0;
 }
 if(counter < 0){
  counter = slidesArray.length - 1;
 }

 // working with slider buttons
 slidesArray.forEach(function(slide){
  slide.style.transform = `translateX(-${counter * 100}%)`
 });
}

// ----------------------Works with all slides on one modal--------------------------:

// slides.forEach(function(slide, index){

//  slide.style.left = `${index * 100}%`; // translate slide 100% left
// });

// let counter = 0;
// nextBtn.addEventListener('click', function(){
//  counter++;
//  carousel();
// });

// prevBtn.addEventListener('click', function(){
//  counter--;
//   carousel();
// });

// function carousel(){
//  // working with slides
//  if(counter === slides.length){
//   counter=0;
//  }
//  if(counter < 0){
//   counter = slides.length - 1;
//  }

//  // working with slider buttons
//  slides.forEach(function(slide){
//   slide.style.transform = `translateX(-${counter * 100}%)`
//  });
// }