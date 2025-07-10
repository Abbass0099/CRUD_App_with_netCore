// client-index.ts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Client Index Page Loaded");

    const deleteButtons = document.querySelectorAll(".btn-danger");

    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const confirmed = confirm("Are you sure you want to delete this client?");
            if (!confirmed) {
                e.preventDefault(); // Prevent navigation
            }
        });
    });
});
