$(window).ready(function(){
//    start of nav bar
    const burger=$('.burger');
    const navbar=$('.bottom-nav');
    const navBackg=$('header')
    burger.on('click',function(){
      navbar.toggleClass('showNav');  
     $(this).toggleClass('toggle'); 
        navBackg.toggleClass('open');
        
        
    })
    
    
    
    
    
    
})




//start of JAVASCRIPT
//swiper
var swiper=new Swiper('.swiper-container', {
               effect:'cube',
               autoplay:{delay:2500,},
               loop:true
})


