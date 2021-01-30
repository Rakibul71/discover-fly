
// Booking conform block and Bonus part
document.querySelector('.book-now').addEventListener('click', function () {
    const fryingFrom = document.querySelector('.flying-from').value;
    const fryingTo = document.querySelector('.flying-to').value;
    const fryingDeparture = document.querySelector('.flying-departure').value;
    const fryingReturn = document.querySelector('.flying-return').value;
    const firstClassTicket = document.querySelector('.first-class-ticket-amount').value;
    const economyTicket = document.querySelector('.economy-ticket-amount').value;

    if (!fryingFrom || !fryingTo || !fryingDeparture || !fryingReturn || !firstClassTicket || !economyTicket) {
        document.querySelector('.warning').textContent = 'PLEASE FILL UP ALL THE IMPORTANT INPUT';
    } else {
        document.querySelector('.booking-form').style.display = 'none';
        document.querySelector('.booking-details').style.display = 'block';
        document.querySelector('.user-flying-from').textContent = fryingFrom;
        document.querySelector('.user-flying-to').textContent = fryingTo;
        document.querySelector('.user-departure-date').textContent = fryingDeparture;
        document.querySelector('.user-return-date').textContent = fryingReturn;
        document.querySelector('.user-first-class').textContent = firstClassTicket;
        document.querySelector('.user-economy-class').textContent = economyTicket;
        grandTotal();
    }
});
// First Class Plus Button Click Event
const firstClassPlusBtn = document.querySelector('.firstClass-plus');
firstClassPlusBtn.addEventListener('click', function () {
    increaseSpinner(firstClassTicket);
    grandTotal();
});

// First Class Minus Button Click Event
const firstClassMinusBtn = document.querySelector('.firstClass-minus');
firstClassMinusBtn.addEventListener('click', function () {
    decreaseSpinner(firstClassTicket);
    grandTotal();
});

// Economy Plus Button Click Event
const economyPlusBtn = document.querySelector('.economy-plus');
economyPlusBtn.addEventListener('click', function () {
    increaseSpinner(economyTicket);
    grandTotal();
});

// Economy Minus Button Click Event
const economyMinusBtn = document.querySelector('.economy-minus');
economyMinusBtn.addEventListener('click', function () {
    decreaseSpinner(economyTicket);
    grandTotal();
});

// Increase Spinner
function increaseSpinner(itemPlus) {
    itemPlus.value++;
    itemPlus.value * 150;
}
const firstClassTicket = document.querySelector('.first-class-ticket-amount');
const economyTicket = document.querySelector('.economy-ticket-amount');

// Decrease Spinner
function decreaseSpinner(itemMinus) {
    let rakibul = Number(itemMinus.value);

    if (!rakibul || rakibul < 0) {
        itemMinus.classList.add('error');
    } else {
        itemMinus.value--;
        itemMinus.value * 150;
    }
}

//Total Price Count
function grandTotal() {
    let getFirstClassPrice = firstClassTicket.value * 150;
    let getEconomyPrice = economyTicket.value * 100;
    let subTotal = (document.querySelector('.subtotal').textContent = getFirstClassPrice + getEconomyPrice);
    let userSubTotal = (document.querySelector('.user-subtotal').textContent = subTotal);
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat = (document.querySelector('.user-vat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal + vat);
    let userTotal = (document.querySelector('.user-total').textContent = total);
}

