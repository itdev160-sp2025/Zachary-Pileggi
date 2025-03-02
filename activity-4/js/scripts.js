//welcome message
var user = 'Zack';
var salutation = 'Howdy, ';
var greeting = salutation + user + 
'! Check out some reviews of One Piece volume 1!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 10,
    studentDiscount = .25,
    studentPrice = price - (price * studentDiscount);

var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = '$' + price.toFixed(2);
studentPriceEl.textContent = '$' + studentPrice.toFixed(2);
