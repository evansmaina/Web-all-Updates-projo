
$(window).ready(function(){

    
    
//    search box
    $('.btn-search').on('click',function(){
       $('.input-search').toggleClass('normal-Search')
        $('.btn-search').toggleClass('closeBtn')
    
    })
    
    
    
    
    

    
    
    
//    end of jQuery
})








 


// 3d cube effect

const swiper=new Swiper('.swiper-container', {
               effect:'cube',
               autoplay:{delay:2000,},
               loop:true
})


