// Function to toggle display of payment method details
function togglePaymentInfo() {
    const paymentMethod = document.getElementById('payment-method').value;
    const paymentInfos = document.querySelectorAll('.payment-info');

    // Hide all payment info sections
    paymentInfos.forEach(info => {
        info.style.display = 'none';
    });

    // Show the selected payment info section
    const selectedPaymentInfo = document.getElementById(`${paymentMethod}-info`);
    if (selectedPaymentInfo) {
        selectedPaymentInfo.style.display = 'block';
    }
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating login functionality
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // You can redirect or perform other actions upon successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const paymentMethod = document.getElementById('payment-method').value;

    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
        const nameOnCard = document.getElementById('name-on-card').value;

        // Handle card payment details
        console.log("Card Payment Details:");
        console.log("Card Number:", cardNumber);
        console.log("Expiry Date:", expiryDate);
        console.log("CVV:", cvv);
        console.log("Name on Card:", nameOnCard);

        alert("Card payment successful!");
    } else if (paymentMethod === 'upi') {
        const upiId = document.getElementById('upi-id').value;
        const otp = document.getElementById('otp').value;
        const receiverUpiId = document.getElementById('receiver-upi-id').value;

        // Handle UPI payment details
        console.log("UPI Payment Details:");
        console.log("UPI ID:", upiId);
        console.log("OTP:", otp);
        console.log("Receiver's UPI ID:", receiverUpiId);

        alert("UPI payment successful!");
    } else if (paymentMethod === 'netbanking') {
        const bank = document.getElementById('bank').value;
        const netbankingUsername = document.getElementById('netbanking-username').value;
        const netbankingPassword = document.getElementById('netbanking-password').value;

        // Handle net banking payment details
        console.log("Net Banking Payment Details:");
        console.log("Bank:", bank);
        console.log("Username:", netbankingUsername);
        console.log("Password:", netbankingPassword);

        alert("Net banking payment successful!");
    } else if (paymentMethod === 'wallet') {
        const walletType = document.getElementById('wallet-type').value;
        const walletUsername = document.getElementById('wallet-username').value;
        const walletPassword = document.getElementById('wallet-password').value;

        // Handle wallet payment details
        console.log("Wallet Payment Details:");
        console.log("Wallet Type:", walletType);
        console.log("Username:", walletUsername);
        console.log("Password:", walletPassword);

        alert("Wallet payment successful!");
    } else {
        alert("Please select a payment method.");
    }
});
