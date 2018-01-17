var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

addToCart("apples");
addToCart("bananas");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
  var cartObject = {[item]:getRandomIntInclusive(1, 100)};
  //add local "cartObject" to global array "cart"
  cart.push(cartObject);
  console.log(`${item} has been added to your cart.`);

  /*
  console.log(cart);
  console.log(cart.length);
  console.log(cartObject);
  console.log(Object.keys(cart[0]).toString());
  console.log(Object.values(cart[0]).toString());
  */

  return cart
}

//In your cart, you have bananas at $17,
//pancake batter at $5, and eggs at $49.
viewCart();
function viewCart() {
  console.log(cart)
  console.log(cart.length)
  if (cart.length > 0){
    var cartString = "In your cart, you have "
    for(let i=0; i < cart.length; i++){
      cartString += Object.keys(cart[i]).toString() + " at $" + Object.values(cart[i]).toString();
      if (cart.length == 2 & i == 0){
        cartString += " and "
      } else if (cart.length > 2 & i < cart.length-2) {
        cartString += ", "
      } else if (cart.length > 2 & i == cart.length-2) {
        cartString += ", and "
      } else if (i == cart.length-1) {
        cartString += "."
      }
    }
  } else {
    var cartString = "Your shopping cart is empty.";
  }
  console.log(cartString);
  return cartString
}

function total() {
  var total;
  for(let i=0; i < cart.length; i++){
    total += Object.values(cart[i]);
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
