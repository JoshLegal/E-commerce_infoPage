/***
 * 
 * 
 * //DATA
 * I want that onclick of the #addtoCart button the cart should feed from the DATA supplied
 * in the LocalStorage using localStorage.getItems('data')
 * 
 * 
 * 
 * 
 * //DELETE BUTTON
 * I want to create an event listener that listens to clicks on #delete button
 * The event should activate the function which clears the object data on the localStorage
 * using localStorage.removeItem('data').
 * and activates the emptyCart text in the DOM
 * 
 * 
 * 
 * 
 * 
 * ***/


document.addEventListener('DOMContentLoaded', function () {

    const decreaseButton = document.querySelector('#btn-decrease');
    const increaseButton = document.querySelector('#btn-increase');
    const cartCounter = document.querySelector('#counter');
    const supElement = document.querySelector('#sup');
    const emptyCartElement = document.querySelector('.emptyCart');
    const cartButton = document.querySelector('#cart-btn');
    const cartLi = document.querySelector('#cart');
    const cartShow = document.querySelector('.show');
    


    let count = 0;

    const productItem = {
                            productName : "Fall Limited Edition Sneakers",
                            price: 125,
                            photo: "images/image-product-1-thumbnail.jpg",
                            buttonVal: "Checkout"
                        }
                             
    function generateCart (item) {
        return `<div class="downCrt">  <!--so i want this to display when the value in #counter > 0 -->
                    <span class="grid">
                        <span><img class="cart-img" src="${item.photo}" alt="thumbnail_1"></span>
                        <span class="cart-text">
                            <span>${item.productName}</span> 
                            <span>
                                <span id="itembrkdn">
                                    $<span id="price">${item.price}</span>.00
                                    <span>x</span>
                                    <span id="Qtty">0</span>   <!--update the value of #Qtty based on the value of #counter-->
                                </span> 
                                <span id="totale">$0.00</span>
                            </span>   <!--so i want it to update the value of #totale based on the #Qtty = #counter multiplied by #price-->
                        </span>
                        <span id="del-btn">
                            <img src="images/icon-delete.svg" alt="delete-icon">
                        </span>
                    </span>
                    <button id="checkout" class="btn-cart">${item.buttonVal}</button>   <!--so i want this submit button to return purchase was successful after being clicked-->
                </div>`
    }

    const emptyCart = `<div>
                            <p class="empty">Your cart is empty</p>
                        </div>`

    function updateSupValue() {
        supElement.textContent = cartCounter.textContent;
    }

    function addDeleteButtonListeners() {
        const deleteButtons = document.querySelectorAll('.downCrt #del-btn');
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener('click', remove);
        });
    }

    function remove(event) {
        const deleteButton = event.target;
        const cartItem = deleteButton.closest('.downCrt');
        if (cartItem) {
            cartItem.remove();
            emptyCartElement.innerHTML = emptyCart 
            count = 0;
            cartCounter.textContent = '0';
            updateSupValue();
            updateItemBreakdown();
        }
    }

    function updateItemBreakdown() {
        const totalElement = document.querySelector('#totale');
        const itemPrice = productItem.price;
        const quantity = count;
        const totalPrice = itemPrice * quantity;
        totalElement? totalElement.innerText = `$${totalPrice.toFixed(2)}`: false;
    }

    decreaseButton.addEventListener('click', function () {
        count == 0? cartCounter.textContent = 0 : cartCounter.textContent = count--;
    });

    increaseButton.addEventListener('click', function () {
        count++;
        cartCounter.textContent = count;
    });

    cartButton.addEventListener('click', function () {
        supElement.textContent = cartCounter.textContent;
        if (parseInt(cartCounter.textContent) >= 1 ){
            emptyCartElement.innerHTML = generateCart(productItem)
            addDeleteButtonListeners();
        }
        else { 
            emptyCartElement.innerHTML = emptyCart 
        }
        const qttyElement = document.querySelector('#Qtty');
        qttyElement.textContent = cartCounter.textContent;
        updateSupValue();
        updateItemBreakdown();
        updateItemBreakdown();
    });

    function closePopUp(){
        cartShow.classList.remove('active')
    }

    cartLi.addEventListener('click', function (){
        cartShow.classList.toggle('active');
    } );
    const screen = document.querySelector('section')
    const body = document.querySelector('body')
    window.addEventListener('click', (event) => {
        if (event.target === body) {
            closePopUp();
    }})

    /**side navigation toggle**/

    function openNav() {
        document.querySelector(".side-nav").style.width = "250px";
    }
    
    function closeNav() {
        document.querySelector(".side-nav").style.width = "0";
    }

    const menuBar = document.querySelector('#menu-bar');
    const closeMenuBar = document.querySelector('#close-btn');

    menuBar.addEventListener('click', openNav);
    closeMenuBar.addEventListener('click', closeNav);




});









/* 
    function openPopup() {
    popup.style.display = 'block';
    }

    function closePopup() {
    popup.style.display = 'none';
    }

    openPopupButton.addEventListener('click', openPopup);
    closePopupButton.addEventListener('click', closePopup);

    window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
});
*/






































































 // const downCrtElement = document.querySelector('.downCrt');
    // const priceElement = document.querySelector('#price');
    // const totalElement = document.querySelector('#totale');


 // function toggleCartElements() {
    //     if (parseInt(cartCounter.textContent) === 0) {
    //         emptyCartElement.style.display = 'block';
    //         // downCrtElement.style.display = 'none';
    //     } else {
    //         emptyCartElement.style.display = 'none';
    //         // downCrtElement.style.display = 'block';
    //     }
    // }


 // function updateItemBreakdown() {
    //     const totalElement = document.querySelector('#totale');
    //     const itemPrice = productItem.price;
    //     const quantity = parseInt(cartCounter.textContent);
    //     const totalPrice = itemPrice * quantity;
    //     totalElement.textContent = '$' + totalPrice.toFixed(2);
    // }


/* const popupQuerySelector = ".show";
    document.addEventListener('click', (e) => {
        // Check if the filter list parent element exist
        const isClosest = e.target.closest(popupQuerySelector);
          
        // If `isClosest` equals falsy & popup has the class `show`
        // then hide the popup
        if (!isClosest && cartShow.classList.contains("active")) {
          popupEl.classList.remove("active");
        }
    });*/

    /*document.addEventListener(
        "click",
        function(event) {
          // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
          if (
            event.target.matches("#cart") ||
            !event.target.closest(".active")
          ) {
            closeModal()
          }
        },
        false
    )
      
    function closeModal() {
        document.querySelector(".active").style.display = "none"
    }*/


/*document.addEventListener('DOMContentLoaded', function () {

    const decreaseButton = document.querySelector('#btn-decrease');
    const increaseButton = document.querySelector('#btn-increase');
    const cartCounter = document.querySelector('#counter');
    const supElement = document.querySelector('#sup');
    const emptyCartElement = document.querySelector('.emptyCart');
    const downCrtElement = document.querySelector('.downCrt');
    const cartButton = document.querySelector('#cart-btn');
    const priceElement = document.querySelector('#price');
    const qttyElement = document.querySelector('#Qtty');
    const totalElement = document.querySelector('#totale');
    const cartLi = document.querySelector('#cart');
    const cartShow = document.querySelector('.show');
    const deleteButton = document.querySelector('#del-btn');

    let count = 0;

    const productItem = {
        productName: "Fall Limited Edition Sneakers",
        price: 125,
        photo: "images/image-product-1-thumbnail.jpg",
        buttonVal: "Checkout"
    }

    function generateCart(item) {
        return `<div class="downCrt">
                    <span class="grid">
                        <span><img class="cart-img" src="${item.photo}" alt="thumbnail_1"></span>
                        <span class="cart-text">
                            <span>${item.productName}</span>
                            <span><span id="itembrkdn">$<span id="price">${item.price}</span>.00<span>x</span><span id="Qtty">0</span></span><span id="totale">$0.00</span></span>
                        </span>
                        <span id="del-btn"><img src="images/icon-delete.svg" alt="delete-icon"></span>
                    </span>
                    <button id="checkout" class="btn-cart">${item.buttonVal}</button>
                </div>`
    }

    function updateSupValue() {
        supElement.textContent = cartCounter.textContent;
    }

    function toggleCartElements() {
        if (parseInt(cartCounter.textContent) === 0) {
            emptyCartElement.style.display = 'block';
            downCrtElement.style.display = 'none';
        } else {
            emptyCartElement.style.display = 'none';
            downCrtElement.style.display = 'block';
        }
    }

    function remove() {
        const cartItem = deleteButton.parentElement.parentElement;
        cartItem.remove();
        count = 0;
        cartCounter.textContent = '0';
        updateSupValue();
        toggleCartElements();
        updateItemBreakdown();
    }

    function updateItemBreakdown() {
        const itemPrice = parseFloat(priceElement.textContent);
        const quantity = parseInt(qttyElement.textContent);
        const totalPrice = itemPrice * quantity;
        totalElement.textContent = '$' + totalPrice.toFixed(2);
    }

    decreaseButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
        }
        cartCounter.textContent = count;
        qttyElement.textContent = count;
        updateItemBreakdown();
    });

    increaseButton.addEventListener('click', function () {
        count++;
        cartCounter.textContent = count;
        qttyElement.textContent = count;
        updateItemBreakdown();
    });

    cartButton.addEventListener('click', function () {
        supElement.textContent = cartCounter.textContent;
        if (parseInt(cartCounter.textContent) >= 1) {
            emptyCartElement.innerHTML = generateCart(productItem);
        } else {
            emptyCartElement.textContent = "Your cart is empty";
        }
        updateSupValue();
        toggleCartElements();
        updateItemBreakdown();
    });

    cartLi.addEventListener('click', function () {
        cartShow.classList.toggle('active');
    });

    deleteButton.addEventListener('click', remove);

    **side navigation toggle**

    function openNav() {
        document.querySelector(".side-nav").style.width = "250px";
    }

    function closeNav() {
        document.querySelector(".side-nav").style.width = "0";
    }

    const menuBar = document.querySelector('#menu-bar');
    const closeMenuBar = document.querySelector('#close-btn');

    menuBar.addEventListener('click', openNav);
    closeMenuBar.addEventListener('click', closeNav);

});*/
