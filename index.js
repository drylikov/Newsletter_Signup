var submitButton = document.querySelector("[data-submit]");
var emailInput = document.querySelector("[data-input]");
var redInputLabel = document.querySelector("[data-red]");
if (submitButton && emailInput) {
    submitButton.addEventListener("click", function () {
        var input = emailInput.value;
        if (validateEmail(input)) {
            openSuccessHTML();
        }
        else {
            toggleInvalidClasses();
        }
    });
}
function validateEmail(input) {
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return input.match(validEmailRegex) ? true : false;
}
function openSuccessHTML() {
    window.open("success.html");
}
function toggleInvalidClasses() {
    if (emailInput && redInputLabel) {
        setTimeout(() => {
            emailInput.setAttribute("data-input", "false");
            redInputLabel.setAttribute("data-red", "false");
        }, 300)
    }
}
