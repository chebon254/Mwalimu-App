/* == PROFILE DROP == */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
/* == PROFILE DROP == */


/* == BACK TO TOP == */
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
/* == BACK TO TOP == */
//Create A Responsive Menu Hide Show Side Menu
const header = document.querySelector(".header-scroll");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".links");
// Onscroll Change Nav Bar Background
window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}
/* == ANIMATION CSS == */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 1;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("showreveal");
    }
  }
}

window.addEventListener("scroll", reveal);
/* == ANIMATION CSS == */

// Onclick For Menu Bar
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}



let old = $('.bk-card').get(0);
$('.bk-card').click(function(){
  if(old!=null && $(old).hasClass('open'))
    $(old).toggleClass('open');
   $(this).toggleClass('open');
   old = this;

})

/* == Testimonial == */
var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("testimony");
        var dots = document.getElementsByClassName("test-dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" dot-change", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " dot-change";

        }
/* == || Testimonial == */


/* == ACCORDION == */
var acc = document.getElementsByClassName("coaching-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* == || ACCORDION == */


/* == Drop Down == */
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
var drop = document.getElementById("drop-dwn-menu-id");
function dropOne() {
    if (drop.style.display = "none") {
        drop.style.display = "block";
    }
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.drp-action-btn')) {
        let dropdowns = document.getElementsByClassName("drop-dwn-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display = "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
/* == || Drop Down == */

/* ======== TABS ========== */
// JavaScript
function changeTab(event, tabId) {
    // Get all tab buttons and tab contents
    var tabButtons = document.getElementsByClassName('tab-button');
    var tabContents = document.getElementsByClassName('tab-content');

    // Remove 'active' class from all tab buttons and tab contents
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Add 'active' class to the selected tab button and tab content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
/* ======== TABS ========== */

/* ======== SIDE TABS ========== */
// JavaScript
function changeSideTab(event, tabId) {
    // Get all tab buttons and tab contents
    var tabButtons = document.getElementsByClassName('side-tab-button');
    var tabContents = document.getElementsByClassName('side-tab-content');

    // Remove 'active' class from all tab buttons and tab contents
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Add 'active' class to the selected tab button and tab content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
/* ======== SIDE TABS ========== */


/* ======== POLICIES TABS ========== */
// JavaScript
function changePoliciesTab(event, tabId) {
    // Get all tab buttons and tab contents
    var tabButtons = document.getElementsByClassName('policies-tab-button');
    var tabContents = document.getElementsByClassName('policies-tab-content');

    // Remove 'active' class from all tab buttons and tab contents
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Add 'active' class to the selected tab button and tab content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
/* ======== ||  POLICIES TABS ========== */

/* ======== POLICIES ACCORDION ========== */

/* ========  || POLICIES ACCORDION ========== */