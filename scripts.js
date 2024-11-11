// Modal control logic
const buyButtons = document.querySelectorAll('.buy-now');
const modal = document.getElementById('payment-modal');
const closeModal = document.querySelector('.close');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const paymentMethodSelect = document.getElementById('payment-method');
const paymentFields = document.getElementById('payment-fields');

// Function to display modal with product details
const showModal = (product, price) => {
    productName.textContent = product;
    productPrice.textContent = price;
    modal.style.display = 'block';
};

// Function to close modal
const closeModalHandler = () => {
    modal.style.display = 'none';
};

// Function to generate payment fields based on selected method
const generatePaymentFields = (paymentMethod) => {
    let fields = '';

    switch (paymentMethod) {
        case 'credit-card':
            fields = `
                <label for="card-number">Card Number:</label>
                <input type="text" id="card-number" name="card-number" placeholder="Enter your card number" required>
                <label for="expiry-date">Expiry Date:</label>
                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
                <label for="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required>
            `;
            break;
        case 'paypal':
            fields = `
                <label for="paypal-email">PayPal Email:</label>
                <input type="email" id="paypal-email" name="paypal-email" placeholder="Enter your PayPal email" required>
            `;
            break;
        case 'cryptocurrency':
            fields = `
                <label for="crypto-address">Cryptocurrency Address:</label>
                <input type="text" id="crypto-address" name="crypto-address" placeholder="Enter your crypto address" required>
            `;
            break;
        default:
            fields = '';
    }

    paymentFields.innerHTML = fields;
};

// Event listener for the "Buy Now" buttons
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        showModal(product, price);
    });
});

// Close the modal on "X" click
closeModal.addEventListener('click', closeModalHandler);

// Dynamically generate payment fields when payment method is changed
paymentMethodSelect.addEventListener('change', () => {
    const paymentMethod = paymentMethodSelect.value;
    generatePaymentFields(paymentMethod);
});

// Form submission logic (dummy)
document.getElementById('payment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Payment successful!');
    closeModalHandler(); // Close the modal after payment
});
