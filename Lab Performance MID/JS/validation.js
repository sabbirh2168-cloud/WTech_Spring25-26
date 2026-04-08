
const UNIT_PRICE = 1000;
const DAYS = 30;

const quantityInput = document.getElementById('quantity');
const totalPriceInput = document.getElementById('totalPrice');

function calculateTotal() {
    let quantity = parseInt(quantityInput.value);

    if (quantity < 0 || isNaN(quantity)) {
        quantity = 0;
        quantityInput.value = 0;
        alert("Quantity cannot be less than 0. Reset to 0.");
    }

    const totalPrice = UNIT_PRICE * quantity * DAYS;
    totalPriceInput.value = totalPrice;

    if (totalPrice > 1000) {
        alert("Congratulations! You are eligible for a gift coupon.");
    }
}

quantityInput.addEventListener('input', calculateTotal);