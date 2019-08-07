$(window).ready(function(){
    $('.navy').hide();
    $('.burger').click(function(){
    $('.navy').slideToggle(3000);
    $(this).toggleClass('toggle');    
        
    })
    
//    search bar anime
const searchBtn=$('.search-icon');
const searchBar=$('.search-bar');
const searchTopText=$('.search-title');
searchBtn.click(function(){
    searchBar.focus();
})    
 
// menu toggle button   
    const openMenBtn=$('.open-menu-link');
    openMenBtn.on('click',function(){
   $('.menu-cont').toggleClass('show')
    
    })
const openMenBtnyy=$('.open-menu-linky');
    openMenBtnyy.on('click',function(){
   $('.menu-cont').toggleClass('show')
    
    })    
    
  //cart  
    const cartButton=$('.cart-item-span');
    cartButton.click(function(){
        $('.overlay').toggleClass('transperBg');
        
    })
    
    
    
    
    
    
    
})







    //javascript
//categoriess nav
const navule=document.querySelector('.navely');
navule.addEventListener('click',onNavule)
function onNavule(e){
const activeNavule=document.querySelectorAll('.current');
activeNavule.forEach(function(tab){
    
    tab.className=tab.className.replace('current','');
    
})
    
e.target.parentElement.className+=' current';    
document.getElementById(e.target.href.split('#')[1]).className+=' current'
}

//search filter
const searxhBox=document.querySelector('.search-bar');
const searchCOntainer=document.querySelector('.menu-cont');
searxhBox.addEventListener('keyup',function(e){
     const term=e.target.value.toLowerCase();
  const productContainer=searchCOntainer.getElementsByClassName('img-container');
    Array.from(productContainer).forEach(function(search){
        const title=search.nextElementSibling.textContent;    
    if(title.toLowerCase().indexOf(term)!=-1){
        search.parentElement.style.display='block'
    }
        else{
            search.parentElement.style.display='none';
        }
        
    })
    
})






//swiper
var swiper=new Swiper('.swiper-container', {
               effect:'cube',
               autoplay:{delay:2000,},
               loop:true
})






//cart area
  
    
    
////add event listeners
const cartContainer = document.getElementById('cart-container');
cartContainer.addEventListener('click', function (e) {
    if (event.target.className == 'remove-item') {
        const remov = event.target.parentElement.parentElement.parentElement;
        remov.parentNode.removeChild(remov);
        showTotals();
    
    } else if (event.target.className == 'increment') {
        const valu = 1;
        const num = event.target.previousElementSibling

        const amount = parseFloat(num.textContent);
        num.textContent = amount + valu;
        updateTotals();
    } 

else if
        (event.target.className == 'decrement') {
        const valu = 1;
        const num = event.target.nextElementSibling
        const amount = parseFloat(num.textContent);
        if (amount > 1) {
            num.textContent = amount - valu;
            updateTotals();
        }
    }
     
})


// update totals
function updateTotals(){
    var total=0;
    const cart=cartContainer.getElementsByClassName('cart-item');
    for(var i=0; i<cart.length; i++){
   var cartItems=cart[i];
    var cartPrice=cartItems.getElementsByClassName('cart-item-price')[0];
    var quantityELement=cartItems.getElementsByClassName('item-amount')[0];
     var price=parseFloat(cartPrice.innerText);
    var quantity=quantityELement.innerText;
        total+= (price*quantity);
    }
    total=Math.round(total*100)/100;

    document.getElementsByClassName('cart-total')[0].innerText=total;
}

//show totals

function showTotals(){
    const total=[];
    const items=document.querySelectorAll(".cart-item-price");
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
      const totalprice=total.reduce(function(total,item){                                         
          total+=item;
          return total;
      },0)
     document.getElementById('cart-total').textContent=totalprice;
   const item= document.querySelectorAll('.cart-items');
    item.forEach(function(itemss){
        itemss.textContent=total.length;
    })
    
}




//purchase item and clear cart
const clearCartbtn=document.getElementById('clear-cart')
clearCartbtn.addEventListener('click',function(event){
    const cart=event.target.parentElement.previousElementSibling
    while(cart.hasChildNodes){
        cart.removeChild(cart.firstChild);
        showTotals();
    }
})
//purchaseBtn
 const purchaseeeeyBtn=document.getElementById('purchase-cart');
const overLay=document.querySelector('.overlay');
purchaseeeeyBtn.addEventListener('click',function(e){
    alert('thankyou for the purchase.... you will receive your products instanly!!')
     const cart=event.target.parentElement.previousElementSibling
    while(cart.hasChildNodes){
        cart.removeChild(cart.firstChild);
        overLay.classList.remove("transperBg");
        showTotals();
    }
})


//purchase fuction button


//addBtn
const addBtn = document.querySelectorAll('.cart-shop-item');
addBtn.forEach(function(btn){
    
  btn.addEventListener('click', function (e) {
   const shopItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;

        const imageView = shopItem.querySelector('.product-img').src;  
        const priceName = shopItem.querySelector('.shop-item-price').textContent.slice(5);
      const finalPrice=parseFloat(priceName)
        const title = shopItem.querySelector('.shop-item-name').textContent;
        additemToCart(imageView, finalPrice, title);
    showTotals();

})  
    
    
})


function additemToCart(imageView, finalPrice, title) {
    var prodTitle=document.getElementsByClassName('prodTitle');
    for(var i=0; i<prodTitle.length; i++){
        if(prodTitle[i].textContent===title){
            alert('Item already added to the cart');
            return;
        }
    }
    
    const cartDiv = document.createElement('div');
    const cartCont = document.querySelector('.cartArea');
    const cartInner = `    
<div class="cart-item">
<img src="${imageView}" class="cart-imgy">
                    <div>
                        <h4 class="prodTitle">${title}</h4>
                        <h5 class="cart-item-price" id="cart-item-price">${finalPrice}</h5>
                        <span class="remove-item"><img src="deletee.png" class="remove-item"></span>
                    </div>
                    <div>
                        
                <img class="decrement" src="prev.png" width="25" height="25">
                        <span id="item-amount" class="item-amount"><strong>1</strong></span>
                  <img class="increment" src="next.png" width="25" height="25">
                    </div>
                  </div>
                </div>`
    cartDiv.innerHTML = cartInner;
    cartCont.append(cartDiv);
    
}


