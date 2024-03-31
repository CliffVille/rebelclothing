document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burgermenu');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            nav.classList.remove('show');
        }
    });
});

var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function displayCartItems() {
    var cartItemsContainer = document.querySelector('.cartItems');
    var total = 0;

    cartItemsContainer.innerHTML = '';

    cartItems.forEach(function(item) {
        var cartItem = document.createElement('div');
        cartItem.classList.add('cartItem');

        var itemName = document.createElement('h2');
        itemName.textContent = item.productName; // Change to productName

        var itemPrice = document.createElement('p');
        itemPrice.textContent = '$' + item.price.toFixed(2);

        var itemImage = document.createElement('img'); // Create image element
        itemImage.src = item.mainImage; // Set image source
        itemImage.alt = item.productName; // Set image alt text
        itemImage.classList.add('cartItemImage'); // Add class for styling

        cartItem.appendChild(itemImage); // Append image to cart item
        cartItem.appendChild(itemName);
        cartItem.appendChild(itemPrice);

        cartItemsContainer.appendChild(cartItem);

        total += item.price;
    });

    document.querySelector('.total').textContent = 'Total: $' + total.toFixed(2);
}

displayCartItems();

document.querySelector('.clearBtn').addEventListener('click', function() {
    cartItems = [];
    localStorage.removeItem('cartItems');
    var cartItemsContainer = document.querySelector('.cartItems');
    cartItemsContainer.innerHTML = '';
    document.querySelector('.total').textContent = 'Total: $0.00';
});

document.querySelector('.checkoutBtn').addEventListener('click', function() {
    alert('Checkout button clicked!');
});
