//search part
const productContainer=document.querySelector('#foodproducts');

// search top
const searchBox=document.forms['search-food'].querySelector('input');

searchBox.addEventListener('keyup',function(e){
    
    const term=e.target.value.toLowerCase();
    const food=productContainer.getElementsByTagName('li')
    Array.from(food).forEach(function(container){
        const foodName=container.lastElementChild.textContent;
        if(foodName.toLowerCase().indexOf(term)!=-1){
            container.style.display='block';
        }
        else{
            container.style.display='none';
        }
    })
});

//search bottom
const searchBoxBottom=document.forms['search-foodyy'].querySelector('input');

searchBoxBottom.addEventListener('keyup',function(e){
    
    const term=e.target.value.toLowerCase();
    const food=productContainer.getElementsByTagName('li')
    Array.from(food).forEach(function(container){
        const foodName=container.lastElementChild.textContent;
        if(foodName.toLowerCase().indexOf(term)!=-1){
            container.style.display='block';
        }
        else{
            container.style.display='none';
        }
    })
});


//addcomment part
const commmentslist=document.querySelector('#commments')
const addComment=document.forms['add-comment'];
addComment.addEventListener('submit',function(e){
    e.preventDefault();
    const value=addComment.querySelector('input[type="text"]').value;         
const profilepic=document.querySelector('.comment-pic').src;
    
const editspace=e.target.querySelector('input');
   editspace.value =''
    addReply(profilepic, value);  
//const picComment=document.createElement('span')
//const both=document.createElement('div')
//const textComment=document.createElement('span')
//const deleteBtn=document.createElement('span')
//
//textComment.textContent=value;
//deleteBtn.textContent="delete";
//picComment.textContent=profilepic;
//
//picComment.classList.add('prof-img');    
//textComment.classList.add("textComment")
//deleteBtn.classList.add("delete");
//comment.classList.add("comment");
//    
//both.appendChild(textComment);
//both.appendChild(deleteBtn);
//comment.appendChild(picComment);
//comment.appendChild(both);    
//commmentslist.appendChild(comment);
//    value.textContent="";
    
})

function addReply(profilepic,value){
      var commentDiv=document.createElement('div');
    var commentContent=document.getElementById('commments')
    //to prevent items from repeating
    var commentItems=`<span><img class="img-fluid comment-pic" src="${profilepic}" width="50">
                </span>
                <div class="">
                <span class="textComment">${value}</span>
                <br />
                <span class="delete">delete</span>`
    commentDiv.classList.add('comment')
    commentDiv.classList.add('col-xs-12')
    commentDiv.classList.add('col-sm-6')
    commentDiv.classList.add('col-md-4')
    commentDiv.classList.add('col-lg-3')
    if(value!==''){
       commentDiv.innerHTML=commentItems;
    commentContent.append(commentDiv);   
    }
   
    
    
    
}






//add delete button function
commmentslist.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const div=e.target.parentElement.parentElement;
        div.parentNode.removeChild(div);
    }
})

//tabbed area

// category areas
function onTabclick(e) {
    var activeTabs = document.querySelectorAll('.current');
    activeTabs.forEach(function (tab) {
        tab.className = tab.className.replace('current', '');
    })
    e.target.parentElement.className += ' current';
    document.getElementById(e.target.href.split('#')[1]).className += ' current';
}




const elem = document.getElementById('nav-tab');
elem.addEventListener('click', onTabclick, false);




        //// team area
//const navPills=document.querySelector('.nav-pills');
//const panels=document.querySelectorAll('.panel');
//navPills.addEventListener('click',(e)=>{
//  
//    
//    if(e.target.tagName=='A'){
//        const targetPanel= document.querySelector(e.target.dataset.target);
//       panels.forEach(function(panel){
//           if(panel==targetPanel){
//               panel.classList.add('active');
//}
//           else{
//               panel.classList.remove('active');
//           }
//       })
//    }
//})


        // cart area section

//cart-info

const cartInfo=document.getElementById('cart-info');
cartInfo.addEventListener('click',function(e){
  cartContainer.classList.toggle('overlay');
  cartInfo.classList.toggle('cliked');
    
})

//event listeners
const cartContainer=document.getElementById('cart-container');
cartContainer.addEventListener('click',function(e){   
    //remove btn
    if(e.target.className=='remove-item'){
       const div=e.target.parentElement.parentElement;
        div.parentNode.removeChild(div);
        showTotals();
        
       }
    else if(e.target.className=='increment'){
        const valu=1;
        const amount=e.target.previousElementSibling;
        const finalAmount=parseFloat(amount.textContent);
        amount.textContent=finalAmount+valu;
        updateTotals();
    }
    else if(e.target.className=='decrement'){
        const valu=1;
        const amount=e.target.nextElementSibling;
        const finalAmount=parseFloat(amount.textContent);
        if(finalAmount>1){
            amount.textContent=finalAmount-valu;
            updateTotals();
        }
    }   
})


//update totals
function updateTotals(){
const cart=cartContainer.getElementsByClassName('cartItems');
var total=0;
for(var i=0; i<cart.length; i++){
    var cartItems=cart[i];
   
    var cartPrice=cartItems.getElementsByClassName('cart-item-price')[0];

    var quantityELement=cartItems.getElementsByClassName('item-amount')[0];
    var price=parseFloat(cartPrice.innerText);
    var quantity=quantityELement.innerText;
        total= total+(price*quantity);
}
    total=Math.round(total*100)/100;

    document.getElementsByClassName('cart-total-price')[0].innerText=total;

}

//add cart button
var cartBtn=document.getElementsByClassName('purchase-btn');
for(var i=0; i<cartBtn.length; i++){
    var buttn=cartBtn[i];
    buttn.addEventListener('click',function(e){
      var shopItem=event.target.parentElement.parentElement;
       var titlyy=shopItem.getElementsByClassName('name')[0];
       var title=shopItem.getElementsByClassName('name')[0].innerText;
       var priceName=shopItem.getElementsByClassName('shop-item-price')[0].innerText;
       var finalPrice=parseFloat(priceName.slice(6).trim());
       var imageView=shopItem.getElementsByClassName('product-img')[0].src;   
        addItemsToCart(title,finalPrice,imageView,titlyy);
        showTotals();
    })
}

///add items to cart

function addItemsToCart(title,finalPrice,imageView,titlyy){
    var cartDiv=document.createElement('div');
    var cartContent=document.getElementById('cart');
   var carttitleItems=document.getElementsByClassName('prodTitle');
    for(var i=0; i<carttitleItems.length; i++){
      
                if(carttitleItems[i].textContent==title){
            alert('This item has already been added to the cart!!!')
                       
                   
            return;
        }
    }
      

 
    
    var contents=`<div class="hello cart-column cartItems">
            <img src="${imageView}" width="100x" style="border-radius:10%;">
            <span class="cart-item-title"><h3 class="prodTitle">${title}</h3></span>
            <span></span>
            <span><h4 class="cart-item-price" id="cart-item-price">${finalPrice}</h4></span>
            <span>
              <img class="decrement" src="prev.png" width="25" height="25">
                        <span id="item-amount" class="item-amount"><strong>1</strong></span>
                  <img class="increment" src="next.png" width="25" height="25">
                <img class="remove-item" src="delete.png" width="36" style="margin-left: 2rem;cursor: pointer"></span>
        </div>`
    cartDiv.innerHTML=contents;
    cartContent.append(cartDiv);
      const imgCont=titlyy.previousElementSibling.previousElementSibling;        
            const purBtn=imgCont.querySelector('.purchase-btn');
            purBtn.textContent='ADDED';   
}


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
     document.getElementById('cart-total-price').textContent=totalprice;
    document.getElementById('cart-items').textContent=total.length;
    
}

//cart prurchase
 const purchaseBtn=document.getElementById('purchase-cart');
purchaseBtn.addEventListener('click',function(e){
    alert('thankyou for the purchase.... you will receive your products instanly!!')
     const cart=event.target.parentElement.previousElementSibling.previousElementSibling;
    console.log(cart);
    while(cart.hasChildNodes){
        cart.removeChild(cart.firstChild);
        showTotals();
    }
})


    
  const searchTop=document.querySelector('.topSearch');
    const searchDown=document.querySelector('.searchDown');
    const topyy=searchTop.offsetTop;
window.addEventListener('scroll',fixSearch);
function fixSearch(){
    if (window.scrollY>topyy){
        searchTop.classList.add('fix-Search');
    }
    else{
        searchTop.classList.remove('fix-Search');
    }
}
    
    

// search top

