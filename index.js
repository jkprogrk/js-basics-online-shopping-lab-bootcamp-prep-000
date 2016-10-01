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
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var cartItem = Object.keys(cart);
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var cartItem in cart) {
      debugger;
      console.log(cartItem);
      console.log(`In your cart, you have ${cartItem} at $${cart[cartItem]}`);
    }
  }
}
viewCart();


function removeFromCart(item) {
  for (var item in cart) {
  if (!cart.hasOwnProperty(item)) { //if cart does NOT have item
      //console.log(`That item is not in your cart.`);  -- seems like this should go here??
    } else if (cart.hasOwnProperty(item)) { //if cart does have item
      cart.pop(item);
    } return cart;
  } console.log(`That item is not in your cart.`);
}


function placeOrder(cardNumber) {
    if (typeof cardNumber !== 'undefined') { //if typeof variable, cardNumber, exists (AKA isn't undefined)
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.length = 0;
    } else {
      console.log(`We don't have a credit card on file for you to place your order.`);
  }
}
