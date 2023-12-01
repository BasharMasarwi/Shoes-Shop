const benav=document.querySelector('.before-nav');
const navv=document.querySelector('.navvbar');
const loading =document.querySelector('.loading');
const scrollTop=document.querySelector('.scroll-top');
const typeTop=document.querySelector('.types');
const header=document.querySelector('.header');
window.addEventListener('scroll',function(){
    if(window.scrollY > navv.offsetTop){
        navv.classList.add("fixed-top"); 
    }
    else{
        navv.classList.remove("fixed-top"); 
    }
    if(window.scrollY > typeTop.offsetTop){
        scrollTop.classList.remove('opacity-0','invisible');
    }
    else{
        scrollTop.classList.add('opacity-0','invisible');
    }
    if(window.scrollY > header.offsetTop){
       navv.style.backgroundColor='rgba(255, 255, 255, 0.9)';
    }
    else{
        navv.style.backgroundColor='rgb(255, 255, 255)';
    }
}) 
window.addEventListener('load',function(){
    setTimeout(function(){
        loading.classList.add('opacity-0','invisible');
        document.body.style.overflow='auto';
    },1500)
})

scrollTop.addEventListener('click',function(){
   window.scroll({
       top:0,
       behavior:"smooth"
   })
      
})

const shoesswiper = new Swiper(".shoes .swiper", {
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView:1,
      spaceBetween: 40
    }
  }
})