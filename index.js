var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.random() * 100;
  Math.floor(price);
  cart.push({item: price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var cartItem = Object.keys(cart);
  for (var i = 0, l = cartItem.length; i < l; i++) {
    console.log(`In your cart, you have socks at $${cart[cartItem[i]]}, puppy at $${cart[cartItem[i]]}, iPhone at $${cart[cartItem[i]]}. `)
  }

}
