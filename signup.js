/*document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup_form");

    const errorBox = document.createElement("div");
    errorBox.id = "error-message";
    errorBox.style.color = "red";
    errorBox.style.marginTop = "10px";
    errorBox.style.fontWeight = "bold";

    form.prepend(errorBox);

    form.addEventListener("submit", function (event) {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("user_email").value.trim();

        let errors = [];

        if (!username) {
            errors.push("Username is required.");
        }

        if (password.length < 6) {
            errors.push("Password must be at least 6 characters.");
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
        if (!email.match(emailPattern)) {
            errors.push("Enter a valid email.");
        }

        if (errors.length > 0) {
            event.preventDefault();
            errorBox.innerHTML = errors.join("<br>");
        } else {
            errorBox.textContent = "";
        }
    });
});*/



/*document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("submit_button");
    const errorBox = document.createElement("div");
    errorBox.id = "error-message";
    errorBox.style.color = "red";
    errorBox.style.marginTop = "10px";
    errorBox.style.fontWeight = "bold";
    document.getElementById("sign_up_form").prepend(errorBox);

    button.addEventListener("click", function (event) {
        event.preventDefault(); // stop form submission if any
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("user_email").value.trim();

        let errors = [];

        if (!username) errors.push("Username is required.");
        if (password.length < 6) errors.push("Password must be at least 6 characters.");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
        if (!email.match(emailPattern)) errors.push("Enter a valid email.");

        if (errors.length > 0) {
            errorBox.innerHTML = errors.join("<br>");
        } else {
            errorBox.textContent = "";
            alert("Validation passed!"); 
        }
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("submit_button");

    button.addEventListener("click", function () {
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("user_email").value.trim();
        const phone = document.getElementById("user_phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const creditCards = document.getElementsByName("credit_card_company");

        
        const usernameError = document.getElementById("username-error");
        const passwordError = document.getElementById("password-error");
        const emailError = document.getElementById("email-error");
        const phoneError = document.getElementById("phone-error");
        const addressError = document.getElementById("address-error");
        const creditCardError = document.getElementById("creditcard-error");

        
        usernameError.textContent = "";
        passwordError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        addressError.textContent = "";
        creditCardError.textContent = "";

        let isValid = true;

        // Username
        if (!username) {
            usernameError.textContent = "Username is required.";
            isValid = false;
        }

        // Password
        if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            isValid = false;
        }

        // Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
        if (!email.match(emailPattern)) {
            emailError.textContent = "Enter a valid email.";
            isValid = false;
        }

        // Phone >= 10 digits
        const phonePattern = /^\d{10,}$/;
        if (!phone.match(phonePattern)) {
            phoneError.textContent = "Enter a valid phone number (at least 10 digits).";
            isValid = false;
        }

        // Address
        if (address.length < 6) {
            addressError.textContent = "Address must be at least 6 characters long.";
            isValid = false;
        }

        // Credit card
        let cardSelected = false;
        for (let card of creditCards) {
            if (card.checked) {
                cardSelected = true;
                break;
            }
        }
        if (!cardSelected) {
            creditCardError.textContent = "Please select a credit card.";
            isValid = false;
        }

        if (isValid) {
            alert("Thanks for signing up, please check your email for account verification!");
            // Here you can submit the data via fetch/ajax, or just log
        }
    });
});