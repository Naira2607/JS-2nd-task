let finalPrice = 0;

let baseFare = 20;
let pricePerKm = 6.5;

let kilometers = Number(
  prompt('Enter kilometers (example: 10)'));

finalPrice = finalPrice + baseFare;
console.log('Base Fare => ' + baseFare + ' EGP');

let distancePrice = kilometers * pricePerKm;
finalPrice = finalPrice + distancePrice;

console.log( 'Distance: ' + kilometers + ' km => ' + distancePrice + ' EGP');

let nightSurcharge = confirm( 'Do you want to add Night Surcharge (10%)?');

if (nightSurcharge == true) {
  let nightValue = (10 / 100) * finalPrice;

  finalPrice = finalPrice + nightValue;

  console.log( 'Night Surcharge 10% => + ' +  nightValue.toFixed(2) + ' EGP' );
}

let promoCode = prompt('Enter Promo Code (SAVE10) or leave empty');

if (promoCode == 'SAVE10') {
  let discountValue = (10 / 100) * finalPrice;

  finalPrice = finalPrice - discountValue;

  console.log('Promo Discount 10% => - ' + discountValue.toFixed(2) + ' EGP');
}

let vat = (14 / 100) * finalPrice;

finalPrice = finalPrice + vat;

console.log('VAT 14% value => ' + vat.toFixed(2) + ' EGP');

console.log( 'Final Taxi Fare is : ' + finalPrice.toFixed(2) + ' EGP');