/* Add your JavaScript to this file */
/*Alright bet, I will but first we used DOM manipulation to add a..I'll google it*/

// Newsletter Subscription Handler
document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.querySelector(".newsletter form");
    const userEmailInput = document.getElementById("email");
    const feedbackMessage = document.querySelector(".message");

    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const emailValue = userEmailInput.value.trim();

        feedbackMessage.textContent = emailValue === "" 
            ? "Please enter a valid email address." 
            : `Thank you! Your email address \`${emailValue}\` has been added to our mailing list!`;
    });
});