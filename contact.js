document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    
    const errorBox = document.createElement("div");
    errorBox.id = "error-message";
    errorBox.style.color = "red";
    errorBox.style.marginTop = "10px";
    errorBox.style.fontWeight = "bold";


    form.appendChild(errorBox);

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let errors = [];

        
        if (name === "") {
            errors.push("Name is required.");
        }

        
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
        if (!email.match(emailPattern)) {
            errors.push("Enter a valid email.");
        }

        
        if (message.length < 10) {
            errors.push("Message must be at least 10 characters.");
        }

        if (errors.length > 0) {
            event.preventDefault(); 
            errorBox.innerHTML = errors.join("<br>");
        } else {
            errorBox.textContent = "";
        }
    });
});
