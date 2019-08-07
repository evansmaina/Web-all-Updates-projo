//selecting tab
const feed=document.querySelector('.offer-feedback');
const navpill = document.getElementById('nav-pills');
 navpill.addEventListener('click',tabClicked);
function tabClicked(e){
    const tabBtn=document.querySelectorAll('.active');
    tabBtn.forEach(function(tab){

    tab.className=tab.className.replace('active',"");
        
    });
  feed.classList.add('hide');  
     e.target.className+=' active';
    
    document.getElementById(e.target.href.split('#')[1]).className+=' active';
}
