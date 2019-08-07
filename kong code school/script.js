//    jQuery
$(document).ready(function(){
      //  LOGIN AREA
// selecting tab
    
//    
//    let tabBtn=$('.nav-pills');
//   tabBtn.on('click',removeTabActive);
//    
//    
//    function removeTabActive(e){
//    let tabs=$('.active');
//        tabs.each(function(){
//          
//            this.className=this.className.replace('active','');       
//        })
//        
//        e.target.className+=' active';    
//     const pan= document.getElementById(e.target.href.split('#')[1])
//       
//        
//       pan.className=' active';
//    }
// 
    
    
//    end of selecting tab
    
    
 const backg=$('.backg-Login'); 
    backg.show(2000);
        
    
          //    form area
//    sign in
    const signInBtn=$('.submit');
    
   signInBtn.on('click',function(e){
       e.preventDefault();
      const email=$('.input-email').val();
       const pass=$('.input-password').val();
      const err=$('.offer-feedback');
       const backg=$('.backg-Login');
       const successForm=$('.offer-section');
        if (email === ''|| pass === '') {
        err.text('Please fill all fields to Sign In');
        err.addClass('error');
            err.removeClass('hide');
    }
       else{
           err.addClass('success');
           err.removeClass('error');
           err.text(' Sign In successful');
           err.removeClass('hide');
           backg.fadeOut(3000);
            successForm.fadeIn(3000);             
       }
       
       
   })
    
    //sign Up
    const signUpBtn=$('.submitUp');
    signUpBtn.on('click',function(e){
        e.preventDefault();
       const firstname=$('.input-first').val();
       const lastname=$('.input-last').val(); 
      const emailUser=$('.input-email-user').val();
       const passUser=$('.input-password-user').val();
       const confirmPass=$('.input-confirm-password').val();
    const backg=$('.backg-Login'); 
        const successForm=$('.offer-section');
       
        const err=$('.offer-feedback');
        if(firstname === ''|| lastname === '' || emailUser === ''|| passUser === '' || confirmPass===''){
    err.text(' Please fill all fields in order to Sign Up');
            err.addClass('error');
            err.removeClass('success');
            err.removeClass('hide');
              if(passUser!==confirmPass){
              
            err.addClass('error');
           err.removeClass('success');
           err.text(' The confirm password does not match the password');
            
            
        }
        }

       
         else{   err.addClass('success');
           err.removeClass('error');
           err.text(' Registration is successful');
            err.removeClass('hide');
              backg.fadeOut(3000);
              successForm.fadeIn(3000);
        }
       
        
    })
    
    
    
    
    // navbar  
    
    $('.burger').click(function(){
        $('.navy').slideToggle(2000);
        $(this).toggleClass('toggle');
        
    })
    
   /// turn.js
    
    
        
    $('#kong-news').turn({gradients:true,acceleration:true});
    
    
    /// ripples
    $('.admission').ripples({
        dropRadius:12,
         perturbance: 0.05,                 
                            });
    
    //team area
    $('.wrapper').click(function(){
        
        $(this).toggleClass('effect');
    })
    
    
    //search
    
    $('.btn-search').on('click',function(){
       $('.input-search').toggleClass('normal-Search')
        $('.btn-search').toggleClass('closeBtn')
    
    })
    
    
    
    
});

// java script

//navbar

const navul=document.querySelector('.navul');
const topNav=navul.offsetTop;


function fixNav(){
 if(window.scrollY>=topNav){
     navul.classList.add('fixed-nav');

 }
    else{
        navul.classList.remove('fixed-nav');
    }
    
}



window.addEventListener('scroll',fixNav);



     ///career section
const careerInfo = document.getElementById('career-info');
 careerInfo.addEventListener('click',tabClicked);
function tabClicked(e){
    const tabBtn=document.querySelectorAll('.current');
    tabBtn.forEach(function(tab){

    tab.className=tab.className.replace('current',"");
        
    });  
     e.target.className+=' current';
   
    document.getElementById(e.target.href.split('#')[1]).className+=' current';
}


// 3d cube effect

var swiper=new Swiper('.swiper-container', {
               effect:'cube',
               autoplay:{delay:2000,},
               loop:true
})



// start of calculatr

function getHistory(){
return document.querySelector('.history-value').innerText; 
}


function printHistory(num){
   return  document.querySelector('.history-value').innerText=num;  
}

function getOutput(){
   return  document.querySelector('.output-value').innerText; 
}

function printOutput(num){
if(num==''){
   document.querySelector('.output-value').innerText=num; 
}
    else{
      document.querySelector('.output-value').innerText=getFormattedNum(num);    
    }
   

}

function getFormattedNum(num){
if(num=='-'){
     return '';
}
  var n= Number(num);
    var value=n.toLocaleString('en');
    return value;
}

function reverseNumFormat(num){
return Number(num.replace(/,/g,''))

}
var oprator=document.querySelectorAll('.operator');
oprator.forEach(function(oper){
    oper.addEventListener('click',function(e){
    if(this.id=='clear'){
       printHistory('');
        printOutput('')
    } 
   else if(this.id=='backspace'){
        var output=reverseNumFormat(getOutput()).toString();
        if(output){
            output=output.substr(0,output.length-1);
            printOutput(output);
        }
        
    }
        
else{
      var output=getOutput();
        var history=getHistory();
    if(output=='' && history!=''){
        if(isNaN(history[history.length-1])){
            history=history.substr(0,history.length-1);
        }
    }
    
    if(output!='' || history!=''){
      //condition is true or false
        output= output==''?
            output:reverseNumFormat(output)
        
    history=history+output;
        if(this.id=='equals'){
            var result=eval(history);
            printOutput(result);
            printHistory('')
        }
        else{
            history=history+this.textContent;
            printHistory(history);
            printOutput('');
        }
    }
        
        
        }        
        
        
    })
})


var number=document.querySelectorAll('.number');
number.forEach(function(nums){
    nums.addEventListener('click',function(e){
     
    var output=reverseNumFormat(getOutput());
    if(output!=NaN){
        output=output+this.textContent;
        printOutput(output);
    }    
        
    })
})



//check box area
const check=document.querySelector('.check');
const screenBack=document.querySelector('.screenback');
const result=document.querySelector('.result');
check.addEventListener('click',function(e){
    screenBack.classList.toggle('active');
    result.classList.toggle('visible');
})






