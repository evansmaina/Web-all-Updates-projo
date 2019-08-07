//search filter
const productContainer = document.querySelectorAll('.product-container');


const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup', function (e) {

    const term = e.target.value.toLowerCase();
     Array.from(productContainer).forEach(function(container){
      const productBackg =container.getElementsByClassName('product-backg');
        Array.from(productBackg).forEach(function (product) {
        const productName = product.lastElementChild.textContent;
        if (productName.toLowerCase().indexOf(term) != -1) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    })
    })
    
    
    
    
})
//SHopping cart

//variables

const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const cartBtn = document.querySelector('.cartbtn');
const productDOM = document.querySelector('.product-container');

//cart
//invoked funtion
(function () {
    const cartInfo = document.getElementById('cart-info');
    const cartContainer = document.getElementById('cart');
    const cartOverlay = document.getElementById('cart-overlay')
    cartInfo.addEventListener('click', function () {
        cartContainer.classList.toggle('showcart');
        cartOverlay.classList.toggle('transparentBcg');
    })

})();

//add item to cart
(function () {
    const cartBtn = document.querySelectorAll('.cart-img');
    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {

            if (event.target.classList.contains("cart-img")) {
                let fullPath = event.target.parentElement.parentElement.previousElementSibling.src;
                

//                let pos = fullPath.indexOf("watch") + 5;
//                let partPath = fullPath.slice(pos);
                //object item        
                const item = {}
                item.img = `${fullPath}`;
                let name = event.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent;
               
                
                item.name = name;
                let price = event.target.parentElement.parentElement.parentElement.nextElementSibling.textContent;
                
                //modify price

                let finalPrice = price.slice(9).trim();
                item.price = finalPrice;
                var cartItrms=document.getElementsByClassName('prodTitle');
                for(var i=0; i<cartItrms.length; i++){
                    if(cartItrms[i].textContent==item.name){
                        alert('already added to the cart');
                        return;
                    }
                }
                
                
                
                
                //added div
                const cartItem=document.createElement('div')
                 cartItem.classList.add('cart-item');
                cartItem.innerHTML=` <img src="${item.img}"class="cart-imgy">
                    <div>
                        <h4 class="prodTitle">${item.name}</h4>
                        <h5 class="cart-item-price" id="cart-item-price">${item.price}</h5>
                        <span class="remove-item">remove</span>
                    </div>
                    <div>
       <img class="decrement" src="icon/prev.png" width="25" height="25">
                        <span class="item-amount"><strong>1</strong></span>
              <img class="increment" src="icon/next.png" width="25" height="25">
                    </div>
                </div>`;
                
                //select cart
                const cart=document.getElementById('cart-content');
                const total=document.querySelector('.cart-footer');
                cart.appendChild(cartItem);
//               const textcart=document.querySelectorAll('.purchase-btn');
//                textcart.forEach(function(tex){
//                    
//                })
                 let title=event.target.parentElement;
                title.textContent='IN CART';
                showTotals();
            }
        })
    })

    //show totals
 
    
})();

///show totals
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
    document.getElementById('cart-items').textContent=total.length;
    }
                     // cart input number
// increament
const cartwhole=document.querySelector('.cart-content');
cartwhole.addEventListener('click',function(e){
if(e.target.className=='remove-item'){
     const div=e.target.parentElement.parentElement;
        div.parentNode.removeChild(div);
    showTotals();
}   
    
    
 else if(e.target.className=='increment'){
     const valu=1;
     const value=e.target.previousElementSibling;
  let car=parseFloat(value.textContent);
 value.innerText=car+valu;
     updateTotals();
     
 }
else if(e.target.className=='decrement'){
       const valu=1;
 const value=e.target.nextElementSibling;
  let car=parseFloat(value.textContent);
    if(car>1){
        value.innerText=car-valu;
        updateTotals();
    }
 
}  

})

/// update totals
function updateTotals(){
const cartContainer = document.getElementById('cart');
const cart=cartContainer.getElementsByClassName('cart-item');
var total=0;
for(var i=0; i<cart.length; i++){
    var cartItems=cart[i];
//    var storeItems=document.getElementById('cart-items')
//    var value=parseFloat(storeItems.textContent);
//    value.textContent=cartItems;
    var cartPrice=cartItems.getElementsByClassName('cart-item-price')[0];
    var quantityELement=cartItems.getElementsByClassName('item-amount')[0]
    var price=parseFloat(cartPrice.innerText);
    var quantity=quantityELement.innerText;
        total= total+(price*quantity);
}
    total=Math.round(total*100)/100;

    document.getElementsByClassName('cart-total')[0].innerText=total;
}


// clear Button
// clear Button
const clearCartbtn=document.getElementById('clear-cart')
clearCartbtn.addEventListener('click',function(event){
    const cart=event.target.parentElement.previousElementSibling;
    while(cart.hasChildNodes){
        cart.removeChild(cart.firstChild);
        showTotals();
    }
})

///
const purchCartbtn=document.getElementById('purchase-cart')
purchCartbtn.addEventListener('click',function(event){
    alert('items purchased successfully...you will receive your products shortly')
    const send=event.target.parentElement.previousElementSibling;
    while(send.hasChildNodes){
        send.removeChild(send.firstChild);
        showTotals();
    }
})



     /// nav tab area
function onTabclick(e) {
    var activeTabs = document.querySelectorAll('.current');
    activeTabs.forEach(function (tab) {
        tab.className = tab.className.replace('current', '');
    })
    e.target.parentElement.className += ' current';
    document.getElementById(e.target.href.split('#')[1]).className += ' current';
}




const navTabs = document.querySelector('.navulle');
navTabs.addEventListener('click', onTabclick, false);


     // feature area
function onFeatureclick(e) {
    var activeTabs = document.querySelectorAll('.live');
    activeTabs.forEach(function (tab) {
        
        tab.className = tab.className.replace('live', '');
    })
    e.target.parentElement.className += ' live';

    console.log(e.target);
    
    document.getElementById(e.target.href.split('#')[1]).className += ' live';
}




const navFeature = document.querySelector('.feature-container');
navFeature.addEventListener('click', onFeatureclick, false);