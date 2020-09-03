let form = document.querySelector("#contact__form")
let inputFields = document.querySelectorAll(".input__form");
let success = true;
var emailInput = document.querySelector("#email");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    inputFields.forEach(function (input) {
        emailInput.style.borderBottom = "";
        input.style.borderBottom = "";
        form.querySelector(".statusMessage." + input.name).innerText = "";
    });

    inputFields.forEach(function (input) {
        if (input.type == "number" && !/^[0-9]+$/.test(input.value) && input.value != "") {
            input.style.borderBottom = "solid 2px red";

            form.querySelector(".statusMessage." + input.name).innerText = "der må kun være tal.";
            success = false;

        }

        if (input.hasAttribute("required") && input.value == "") {
            input.style.borderBottom = "solid 2px red";

            form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
            success = false;

        }

        var at = form.email.value.indexOf("@");
        var dot = form.email.value.lastIndexOf(".");
        var emailStatus = document.querySelector(".statusMessageEmail")

        if (at <= 0) {
            emailInput.style.borderBottom = "solid 2px red";
            form.email.focus();
            emailStatus.innerText = "Skriv gyldig email.";
            success = false;
        }
        if (dot < at + 2) {
            emailInput.style.borderBottom = "solid 2px red";
            form.email.focus();
            emailStatus.innerText = "Skriv gyldig email.";
            success = false;
        }
        if (form.email.value.length <= dot + 2) {
            emailInput.style.borderBottom = "solid 2px red";
            form.email.focus();
            emailStatus.innerText = "Skriv gyldig email.";
            success = false;
        }


    });
    if (!success) return
});
