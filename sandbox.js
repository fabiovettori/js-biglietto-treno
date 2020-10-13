// customer info
var customerName = prompt('Please insert your name');
var customerAge = prompt('Please insert your age');
var distance = prompt('Please insert the distance of your journey');

// ticket price variables
var price = distance * 0.21;
var journeyPrice;
// console.log(price);

// ticket price
if (customerAge < 18) {
    journeyPrice = price * 0.8;
} else if (customerAge > 65) {
    journeyPrice = price * 0.6;
} else {
    journeyPrice = price;
}
// console.log(journeyPrice);

// output
document.getElementById('customer-name').innerHTML = customerName;
document.getElementById('ticket-price').innerHTML = journeyPrice;
