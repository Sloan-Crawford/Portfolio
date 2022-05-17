// ----- Select Elements -----
// For Modal
const open = document.getElementById('open');
const modalContainer = document.getElementById('modal_container');
const close = document.getElementById('close');

// For Modal slider buttons
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// Sticky navbar on scroll
$(document).ready(function() {
 $(window).scroll(function() {
  if(this.scrollY > 15) {
   $('.navbar').addClass("sticky");
  } else {
   $('.navbar').removeClass("sticky");
  }

  // show/hide scroll to top button
 });

 // navbar menu toggle
 $('.menu-btn').click(function() {
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn').toggleClass("rotate");
 })
})

open.addEventListener('click', () => {
 modalContainer.classList.add('show');
});

close.addEventListener('click', () => {
 modalContainer.classList.remove('show');
});


// Modal slider (for screenshots)
slides.forEach(function(slide, index){
 slide.style.left = `${index * 100}%`; // translate slide 100% left
});

let counter = 0;
nextBtn.addEventListener('click', function(){
 counter++;
 carousel();
});
prevBtn.addEventListener('click', function(){
 counter--;
  carousel();
});

function carousel(){
 if(counter === slides.length){
  counter=0;
 }
 if(counter < 0){
  counter = slides.length - 1;
 }

 // working with buttons
 slides.forEach(function(slide){
  slide.style.transform = `translateX(-${counter * 100}%)`
 });
}