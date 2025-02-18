// script.js

// Sample product data
const products = [
    { id: 1, name: "Printed T-Shirts", price:299, image: "images/product1.jpg" },
    { id: 2, name: "Customized shirts", price: 499, image: "images/product2.jpg" },
    { id: 3, name: "Designer Shirts", price: 699, image: "images/product3.jpg" },
];

let cart = [];

// Load products dynamically
function loadProducts() {
    const productGrid = document.getElementById("product-grid");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>$${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});
