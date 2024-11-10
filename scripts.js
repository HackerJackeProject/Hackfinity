// Modal control logic
const buyButtons = document.querySelectorAll('.buy-now');
const modal = document.getElementById('payment-modal');
const closeModal = document.querySelector('.close');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const paymentMethodSelect = document.getElementById('payment-method');
const paymentFields = document.getElementById('payment-fields');

// Event listener for the "Buy Now" buttons
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');

        productName.textContent = product;
        productPrice.textContent = price;

        // Show modal
        modal.style.display = 'block';
    });
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Add dynamic payment fields based on selected method
paymentMethodSelect.addEventListener('change', () => {
    const paymentMethod = paymentMethodSelect.value;

    if (paymentMethod === 'credit-card') {
        paymentFields.innerHTML = `
            <label for="card-number">Card Number:</label>
            <input type="text" id="card-number" name="card-number" placeholder="Enter your card number" required>
            <label for="expiry-date">Expiry Date:</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required>
        `;
    } else if (paymentMethod === 'paypal') {
        paymentFields.innerHTML = `
            <label for="paypal-email">PayPal Email:</label>
            <input type="email" id="paypal-email" name="paypal-email" placeholder="Enter your PayPal email" required>
        `;
    } else if (paymentMethod === 'cryptocurrency') {
        paymentFields.innerHTML = `
            <label for="crypto-address">Cryptocurrency Address:</label>
            <input type="text" id="crypto-address" name="crypto-address" placeholder="Enter your crypto address" required>
        `;
    }
});

// Form submission logic (dummy)
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful!');
    modal.style.display = 'none'; // Close the modal after payment
});
