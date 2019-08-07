
$(window).ready(function(){
//    sign In
//   const searchBody=$('.mainy');
//         searchBody.hide();
//       const loginFrm=$('.login-div');
//    loginFrm.hide();
     const modaly=$('.modaly');
         const backdrop=$('.backdrop');
    modaly.hide();
    backdrop.hide();
    
    const signInBtn=$('.submitBtn')
    signInBtn.on('click',function(e){
    e.preventDefault();    
    const email=$('.input-email').val();
    const pass=$('.input-password').val();
    const currentLoc=$('.input-location').val();
    const error=$('.offer-feedback');    
        
     if(email==='' || pass==='' || currentLoc===''){
        error.addClass('error');
        error.text('Please fill All Fields To Sign In!!!!');
         error.removeClass('hide');
        
    }
        
        
        
        
//    else if(email===''){
//        error.addClass('error');
//        error.text('Email field Required!!!!');
//        
//        
//    } 
//    else if(pass===''){
//        error.text('Please fill the password Field!!!!');
//     error.addClass('error');
//        
//    } else if(currentLoc===''){
//        error.text('The Current Location Field is Mostly Required!!!!');
//   error.addClass('error');
//        
//    }     
     else{
        error.addClass('success');
        error.text('Sign In Sucessfull!!');
         error.removeClass('error');
          const modaly=$('.modaly');
         const backdrop=$('.backdrop');
        backdrop.show(1000);
         modaly.show(1000);
         backdrop.on('click',function(){
              backdrop.hide(1000);
             modaly.hide(1000);
         })
         
         const closeModal=$('.closeModal');
         closeModal.on('click',function(){
            backdrop.hide(1000);
             modaly.hide(1000);
             
         })
   
     
         
     }  
        
        
    })
   
   
// sign up Btn
    const signUpbtn=$('.submitUp');
    signUpbtn.on('click',function(e){
        e.preventDefault();
    const firstn=$('.input-first').val();    
    const lastn=$('.input-last').val();
    const email=$('.input-email-user').val()
    const mobile=$('.input-tel').val();    
    const currentLoc=$('.input-Location').val();    
    const pass=$('.input-password-user').val(); 
    const confPass=$('.input-confirm-password').val();
    const error=$('.offer-feedback'); 
        
        
    
        if(firstn==='' || lastn==='' || email==='' || mobile==='' || currentLoc=='' ){
           error.addClass('error');
        error.text('Please fill All Fields To Sign Up!!!!');
         error.removeClass('hide');
//           if(!pass===confPass){
//           error.text('Password  Does Not Match!!!!'); 
//            return;
//            
//        }    
            return;
            
        }
        
//        else if(firstn===''){
//           error.text('First name required!!!!');
//            error.addClass('error');
//            return;
//            
//        }
//        else if(lastn===''){
//           error.text('Last name required!!!!');
//            error.addClass('error');
//            return;
//            
//        }
//        else if(email===''){
//           error.text('Email name required!!!!');
//            error.addClass('error');
//            return;
//            
//        }
//        else if(mobile===''){
//           error.text('Mobile Number required!!!!');
//            error.addClass('error');
//            return;
//            
//        }
//        else if(currentLoc===''){
//           error.text('Current Location is Mostly  required!!!!');
//            error.addClass('error');
//            return;
//            
//        }
          else if(pass!==confPass){
           error.text('Current Do not match!!!!');
            return;
            
        }
      
        
     else{
         error.addClass('success');
         error.text('Registration SuccessFul!!');
         error.removeClass('error');
      const modaly=$('.modaly');
         const backdrop=$('.backdrop');
        backdrop.show(1000);
         modaly.show(1000);
         backdrop.on('click',function(){
              backdrop.hide(1000);
             modaly.hide(1000);
         })
         
         const closeModal=$('.closeModal');
         closeModal.on('click',function(){
            backdrop.hide(1000);
             modaly.hide(1000);
             
         })
       
         
            
     }
     
        
    })
    
    

    

    
    
    
    
    

    
    
    
//    end of jQuery
})








const navPils=document.querySelector('.nav-pills');
navPils.addEventListener('click',onTabClick);
function onTabClick(e){
const ontablet=document.querySelectorAll('.offer-feedback');
 ontablet.forEach(function(taby){
     taby.classList.add('hide');
     
 })
      
      
   var tabClick=document.querySelectorAll('.active');
    tabClick.forEach(function(tab){
  
    tab.className=tab.className.replace('active','');    
    })
    e.target.className+=' active';
    document.getElementById(e.target.href.split('#')[1]).className+=' active';
}




