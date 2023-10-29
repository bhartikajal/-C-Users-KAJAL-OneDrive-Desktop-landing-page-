
let menu =document .queryselector('#menu-bars');
let navbar =document .queryselector('.navbar');

menu.onclick =() =>{

    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
}
let section =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header .navbar a');

window.onscroll =() =>{

    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
    section.foreach(sec =>{

    

      let top=window.scrollY;
      let height=sec.offsetmeight;
      let offset =sec.offsettop-150;
      let id =sec.Attribute('id');

      if(top=>offset && top <offset +height){
        navlink.foreach(link =>{
          links.classlist.remove('active');
          document.querySelector('heasder .navbar a[href'='+id']'').classlist.add('active')

        });
      };
    });




    }





document.queryselector('#search.icon').onclick =()=>{
    document.queryselector('#search-form').classlist.toggle('active')

}
document.queryselector('#close').onclick =()=>{
    document.queryselector('#search-form').classlist.remove('active')

}
var swiper = new swiper(" home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
    loop:true,
  });
  var swiper = new swiper(" .review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    
    loop:true,
    breakpoints:{
      0:{
        slidespreview:1,
      },
      640:{
        slidespreview:2,
      },
      640:{
        slidespreview:2,
      },
      768:{
        slidespreview:3,
      },

    },
  });
  




