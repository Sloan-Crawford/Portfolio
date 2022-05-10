// Select Elements:
const open = document.getElementById('open');
const modalContainer = document.getElementById('modal_container');
const close = document.getElementById('close');

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