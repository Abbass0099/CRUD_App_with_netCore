document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form?.addEventListener("submit", (e) => {
        const name = (document.getElementById("name") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
        const address = (document.getElementById("address") as HTMLInputElement).value.trim();


        if (!name || !email.includes("@") || phone.length < 6 || !address) {
            alert("Please enter a valid name, email, phone number, and address.");
            e.preventDefault(); // Stop form submission
        }
    });
});
