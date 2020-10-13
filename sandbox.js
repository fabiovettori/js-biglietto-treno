// customer info
var customerName = prompt('Please insert your name');
var customerAge = prompt('Please insert your age');
var distance = prompt('Please insert the distance of your journey');
console.log(customerName + ' ' + customerAge + ' ' + distance);

// ticket price variables
var price = distance * 0.21;
var journeyPrice;
console.log(price);

// ticket price
if (customerAge < 18) {
    journeyPrice = price * 0.8;
} else if (customerAge > 65) {
    journeyPrice = price * 0.6;
} else {
    journeyPrice = price;
}
console.log(journeyPrice);

// journey price fixed
var journeyPriceFixed = journeyPrice.toFixed(2);
console.log(journeyPriceFixed);

// output
if (isNaN(customerAge) || isNaN(distance)) {
    document.getElementById('warnings').innerHTML = 'Invalid entries. Please refresh the page.';
} else {
    document.getElementById('customer-name').innerHTML = 'Hi ' + customerName;
    document.getElementById('ticket-price').innerHTML = 'the price of your journey is: ' +  journeyPriceFixed + '€';
}
