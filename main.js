const burger = document.querySelector('#burger')
const iconX = burger.querySelector('.icon-x')
const iconBurger = burger.querySelector('.icon-burger')
const menu = document.querySelector('#modal-menu')
const nav = document.querySelector('#nav')

burger.addEventListener('click', function() {
    menu.classList.toggle('hidden')
    iconX.classList.toggle('hidden')
    iconBurger.classList.toggle('hidden')
    nav.classList.toggle('hidden')

})

// nav bar scroll
jQuery(function($) {
    $(window).scroll(function(){
     if($(window).scrollTop() >50) {
    $(".scroll").addClass("nav-solid");}
    
    else {
    $(".scroll").removeClass("nav-solid");}
    });
    });

    // style guide 
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;

        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

    
    $("nav").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top
      });
  });