let form = document.getElementById("contact__form");
let inputFields = document.getElementsByClassName(".form__input");
let success = true;

function formvalidator() {
    
    form.addEventListener("submit", function(event) {
        event.preventDefault;


        inputFields.forEach(function (input) {
            input.style.backgroundColor = "inherit";
            form.querySelector(".statusMessage." + input.name).innerText = "";
            if (input.hasAttribute("required") && (input.value == "")) {
                input.style.backgroundColor = "red";
                form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
                success = false;
            }
            if (textarea.hasAttribute("required") && (textarea.value == "")) {
                textarea.style.backgroundColor = "red";
                form.querySelector(".statusmessage." + textarea.name).innerText = "Udfyld dette felt.";
                success = false;
            }
        });

        if (!success) return;
    })
};
export default formvalidator;