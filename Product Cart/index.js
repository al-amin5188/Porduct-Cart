let cartCount = 1;

function updateCartCount(value) {
  cartCount += value;

  // Ensure the cart count does not go below 0
  if (cartCount < 1) {
    cartCount = 1;
  }

  // Update the cart count on the UI
  document.getElementById("cart-count").innerText = cartCount;
}
