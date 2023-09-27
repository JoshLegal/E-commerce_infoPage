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
    // const decreaseButton = document.querySelector('#btn-decrease');
    // const increaseButton = document.querySelector('#btn-increase');
    // const cartCounter = document.querySelector('#counter');
    // const supElement = document.querySelector('#sup');
    // const emptyCartElement = document.querySelector('.emptyCart');
    // const downCrtElement = document.querySelector('.downCrt');
    // const cartButton = document.querySelector('#cart-btn');
    // const priceElement = document.querySelector('#price');
    // const qttyElement = document.querySelector('#Qtty');
    // const totalElement = document.querySelector('#totale');
    // const cartLi = document.querySelector('#cart');
    // const cartShow = document.querySelector('.show');
    // const deleteButton = document.querySelector('#del-btn');

    // /*const productItem = [{productName : "Fall Limited Edition Sneakers",
    //                         price: 125,
    //                         photo: "images/image-product-1-thumbnail.jpg",
    //                         buttonVal: Checkout}]
                            
                  
    // */

    // function updateSupValue() {
    //     supElement.textContent = cartCounter.textContent;
    // }
    

    // function toggleCartElements() {
    //     if (parseInt(cartCounter.textContent) === 0) {
    //         emptyCartElement.style.display = 'block';
    //         downCrtElement.style.display = 'none';
    //     } else {
    //         emptyCartElement.style.display = 'none';
    //         downCrtElement.style.display = 'block';
    //     }
    // }

    // // toggleCartElements();

    // function remove(){
    //     const cartItem = deleteButton.closest('.grid');
    //     cartItem.remove();
    //     cartCounter.textContent = '0';
    //     updateSupValue();
    //     toggleCartElements();
    //     updateItemBreakdown();
    // }

    // function updateItemBreakdown() {
    //     const itemPrice = parseFloat(priceElement.textContent);
    //     const quantity = parseInt(qttyElement.textContent);
    //     const totalPrice = itemPrice * quantity;
    //     totalElement.textContent = '$' + totalPrice.toFixed(2);
    // }


    // decreaseButton.addEventListener('click', function () {
    //     const currentValue = parseInt(cartCounter.textContent);
    //     if (currentValue > 0) {
    //         cartCounter.textContent = currentValue - 1;
    //         // updateSupValue();
    //         // toggleCartElements();
    //         qttyElement.textContent = cartCounter.textContent;
            
    //     }
    // });

    // increaseButton.addEventListener('click', function () {
    //     const currentValue = parseInt(cartCounter.textContent);
    //     cartCounter.textContent = currentValue + 1;
    //     // updateSupValue();
    //     // toggleCartElements();
    //     qttyElement.textContent = cartCounter.textContent;
    //     // updateItemBreakdown();
    // });

    // cartButton.addEventListener('click', function () {
    //     supElement.textContent = cartCounter.textContent;
    //     qttyElement.textContent = cartCounter.textContent;
    //     updateSupValue();
    //     updateItemBreakdown();
    //     toggleCartElements();
    //     updateItemBreakdown();
    // });

    // cartLi.addEventListener('click', function () {
    //     cartShow.classList.toggle('active');
    // });
   

    deleteButton.addEventListener('click', remove);

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