const submitButton: HTMLButtonElement | null = document.querySelector("[data-submit]")
const emailInput: HTMLInputElement | null = document.querySelector("[data-input]")
const redInputLabel: HTMLDivElement | null = document.querySelector("[data-red]")
if(submitButton && emailInput){
    submitButton.addEventListener("click", () => {
        const input = emailInput.value
        if(validateEmail(input)){
            openSuccessHTML()
        }
        else{
            toggleInvalidClasses()
        }
    })
}

function validateEmail(input: string): boolean{
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return input.match(validEmailRegex) ? true : false 
}

function openSuccessHTML(): void{
    window.open("success.html")
}

function toggleInvalidClasses(): void{
    if(emailInput && redInputLabel){
        emailInput.setAttribute("data-input", "false")
        redInputLabel.setAttribute("data-red", "false")
    }
}

export{}