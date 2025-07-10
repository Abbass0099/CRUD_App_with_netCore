"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        if (!name || !email.includes("@") || phone.length < 6) {
            alert("Please enter a valid name, email, and phone number.");
            e.preventDefault(); // Stop form submission
        }
    });
});
