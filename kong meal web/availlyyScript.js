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