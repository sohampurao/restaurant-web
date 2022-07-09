"use strict"
// PRELOADER
window.addEventListener('loadstart', ()=> document.body.classList.add('overflow-hidden')) 
window.addEventListener('load', () => { return document.getElementById("preloader").style.display = "none", document.body.classList.remove('overflow-hidden')})

/*=============== SCROLL UP START ===============*/
function scrollUP() {
    let scrollBtn = document.getElementById("scrollup");
    if (this.scrollY >= 400)scrollBtn.classList.add("show-scroll"); else scrollBtn.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUP)
/*=============== SCROLL UP END ===============*/

/*=============== SCROLL REVEAL ANIMATION  START ===============*/
window.addEventListener('load', scrollReveal)

function scrollReveal() {
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset : 'true'
})

// for about image
sr.reveal('.about-image-container', {origin: 'left'})
sr.reveal('.about-image-container', {delay: 900})
sr.reveal('.about-image-container', {duration: 3000})

sr.reveal('.about-text', {origin: 'right'})
sr.reveal('.about-text', {delay: 900})
sr.reveal('.about-text', {duration: 3000})

// for home page
sr.reveal('#sp-container-1', {origin: 'left'})
sr.reveal('#sp-container-2', {origin: 'top'})
sr.reveal('#sp-container-3', {origin: 'right'})

sr.reveal('.home-card-1, .home-card-2, .home-card-3', {duration: 3000})
sr.reveal('#sp-container-m1, #sp-container-m2, #sp-container-m3', {duration: 3000})

sr.reveal('.menu-item-left .menu-item-container', {origin: 'left'})
sr.reveal('.menu-item-right .menu-item-container', {origin: 'right'})

if (window.innerWidth <= 575.98) {
    sr.reveal('.menu-item-right .menu-item-container', {origin: 'left'})
}
}
/*=============== SCROLL REVEAL ANIMATION END ===============*/

/*=============== OFFCANVAS START ===============*/
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggler'), navClose = document.getElementById('nav-close'), cartBody = document.getElementById("cart-body"), cartToggle = document.getElementById('cart-icon'), cartClose = document.getElementById('cart-close');

// show menu
navToggle.addEventListener('click', function(){navMenu.classList.add('show-menu'); return document.body.classList.add('overflow-hidden')});

cartToggle.addEventListener('click', function(){ cartBody.classList.add('cart-show'); document.body.classList.add('overflow-hidden')});
// hide menu
navClose.addEventListener('click', function(){navMenu.classList.remove('show-menu'); return document.body.classList.remove('overflow-hidden')});

cartClose.addEventListener('click', function(){cartBody.classList.remove('cart-show'); return document.body.classList.remove('overflow-hidden')});

// removing "show-menu" class while navigation
const navLink = document.querySelectorAll('.nav-item')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-item link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== OFFCANVAS END ===============*/

/*=============== SHOPPING CART START ===============*/

//executes the function while loading the page and even after the page is loaded
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready();
}

function ready() {
    // looping to all trash buttons and adding event listener to all of them.
    const cartTrashItemRowBtn = document.getElementsByClassName('cart-item-delete');
    for(var i = 0; i < cartTrashItemRowBtn.length; i++) {
        var button = cartTrashItemRowBtn[i];
        button.addEventListener('click', removeCartItems)
    }

    // looping to input fields and adding event listener to all of them.
    var quantityInputs = document.getElementsByClassName('quantity-display');
    for(var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityInputsChaged)
    }

    // looping to Add to buttons and adding event listener to all of them.
    let addToCartBtns = document.getElementsByClassName('add-to-cart');
    for(let i = 0; i < addToCartBtns.length; i++) {
        var button = addToCartBtns[i];
        button.addEventListener('click', addToCartItemRow)
    }

    // looping to add quantity buttons and adding event listener to all of them.
    var increaseCartItemQuantityBtns = document.getElementsByClassName('plus-quantity');
    for(var i = 0; i < increaseCartItemQuantityBtns.length; i++) {
        var increaseBtn = increaseCartItemQuantityBtns[i];
        increaseBtn.addEventListener('click', increaseCartItemQuantity)
    }

    // looping to sub quantity buttons and adding event listener to all of them.
    var decreaseCartItemQuantityBtns = document.getElementsByClassName('minus-quantity');
    for(var i = 0; i < decreaseCartItemQuantityBtns.length; i++) {
        var decreaseBtn = decreaseCartItemQuantityBtns[i];
        decreaseBtn.addEventListener('click', decreaseCartItemQuantity)
    }

    //adding event listener to the purchase button 
    document.getElementsByClassName('menu-order-btn')[0].addEventListener('click', purchaseClicked)
}
    //function for getting count of total number of items in the cart
    function cartItemCount() {
        var cartRows = document.getElementsByClassName('cart-item-row').length;
        cartRows = parseInt(cartRows);
        var cartRowsCount = document.getElementsByClassName('cart-item-count');
        for (let index = 0; index < cartRowsCount.length; index++) {
            cartRowsCount[index].innerHTML = cartRows;
        }
    };

    cartItemCount();

    //function returns alert message on purchase and make cart empty
    function purchaseClicked() {
        alert('Thank you for your purchase!')
        var cartItems = document.getElementById('cart-item-container');
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
        cartItemCount()
    }

    // function for removing the menu item row form the cart
    function removeCartItems(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
        updateCartTotal()
        cartItemCount()
}

    //function prevents costumer from ordering unexpected order quantity value.
    function quantityInputsChaged(event) {
        var input = event.target;
        // returns 1 when order quantity is set to (-, null(0))
        if(isNaN(input.value) || input.value <= 0 || input.value == "" ) {
            input.value = 1;
        }
        //returns 7 if quantity value is < 7 and give an alert message 
        else if (input.value > 7) {
            input.value = 7;
            alert('Maximum order quantity of a item is 7.')
        }
        updateCartTotal()
    }

    //function for fetching detials of a specific item when 'Add to cart' btn is clicked.
    function addToCartItemRow(event) {
        let button = event.target;
        let menuItemContainer = button.parentElement.parentElement;
        let title = menuItemContainer.getElementsByClassName('menu-item-title')[0].innerHTML;
        let price = menuItemContainer.getElementsByClassName('menu-item-price')[0].innerHTML;
        let image = menuItemContainer.getElementsByClassName('menu-item-img')[0].src;
        addToTheCart(title, price, image)
    }

    function addToTheCart(title, price, image) {
        //checking whether the item is already exist in the shopping cart
        var CartItemTitle = document.getElementsByClassName('cart-item-title');
        for(let i =0; i < CartItemTitle.length; i++) {
            if(CartItemTitle[i].innerHTML == title) {
                alert('This item is already added to the cart!')
                return
            }
        }

        var cartRow = document.createElement('div');
        cartRow.classList.add('row')
        cartRow.classList.add('cart-item-row')
        cartRow.classList.add('py-3')

        var CartRowContainer = document.getElementsByClassName('cart-item-container')[0];
        var cartRowContent = `
        <div class="cart-item-details col-8 pe-0 mt-1">
            <div class="cart-item-title pe-1 text-capitalize">${title}</div>
                <div class="cart-item-price fw-normal">${price}</div>
                <div class="cart-item-quantity d-flex align-items-center justify-content-start py-2">
                <div class="minus-quantity">
                    <i class="fa-solid fa-minus rounded-circle text-center d-flex justify-content-center align-items-center bg-danger text-white"></i>
                </div>
                <input type="number" name="quantity-display" class="quantity-display text-center bg-light" min="1" max="7" size="2" value="1">
                <div class="plus-quantity">
                    <i class="fa-solid fa-plus rounded-circle d-flex justify-content-center align-items-center  bg-danger text-white"></i>
                </div>
                <div class="cart-item-delete">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
                </div>
            </div>
            <div class="cart-item-img col-4 ps-0 my-auto">
                <img src="${image}" alt="cart item image" class="img-fluid rounded-2">
            </div>
        `
        cartRow.innerHTML = cartRowContent;
        CartRowContainer.append(cartRow);
        cartRow.getElementsByClassName('quantity-display')[0].addEventListener('change', quantityInputsChaged);
        cartRow.getElementsByClassName('plus-quantity')[0].addEventListener('click', increaseCartItemQuantity);
        cartRow.getElementsByClassName('minus-quantity')[0].addEventListener('click', decreaseCartItemQuantity);
        cartRow.getElementsByClassName('cart-item-delete')[0].addEventListener('click', removeCartItems);
        updateCartTotal()
        cartItemCount()
    }

    // function for decreasing order quantity by 1
    function decreaseCartItemQuantity(event) {
        var decreaseBtn = event.target;
        var input = decreaseBtn.parentElement.parentElement.getElementsByClassName('quantity-display')[0];
        if (input.value >= 2) {
            input.value--;
        }
        updateCartTotal()
    }

    // function for incrementing order quantity by 1
    function increaseCartItemQuantity(event) {
        var increaseBtn = event.target;
        var input = increaseBtn.parentElement.parentElement.getElementsByClassName('quantity-display')[0];
        if (input.value < 7) {
            input.value++;
        }
        updateCartTotal()
    }

    //function returns total order value
    function updateCartTotal() {
        let cartItemContainer = document.getElementById('cart-item-container');
        let cartItemRows = cartItemContainer.getElementsByClassName('cart-item-row');
        var shippingAmount = document.getElementsByClassName('shipping-price')[0];
        shippingAmount = parseInt(shippingAmount.innerHTML.replace('₹', ''))

        var total = 0;
        for(var i = 0; i < cartItemRows.length; i++) {
            var cartRow = cartItemRows[i];
            var itemPrice = parseInt(cartRow.getElementsByClassName('cart-item-price')[0].innerHTML.replace('₹', ''))
            var itemQuantity = cartRow.getElementsByClassName('quantity-display')[0].value;
            total = total + (itemPrice * itemQuantity)
            }
        if(total > 3000) {
            total;
            document.getElementsByClassName('shipping-price')[0].style.textDecoration = "line-through";
        } else if (total > 0) {
            total = total + shippingAmount;
            document.getElementsByClassName('shipping-price')[0].style.textDecoration = "none";
        }
        return document.getElementById('total-price').innerHTML = total + ' &#8377;';
}
/*=============== SHOPPING CART END ===============*/
