const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError")

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError")

function validateForm(){


    event.preventDefault();

    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } 
    else {
        emailError.style.display = "block";
    }

    if(subject.value.trim().length > 5) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(message.value.trim().length > 20) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

































/*

const form = document.querySelector(".formclass");
const name = document.querySelector("#name");
const email = document.querySelector("#email");


function validateform (){
    
    event.preventDefault();

    if(email.value.length === ) {
        const errorMessage = document.querySelector(".error-message-for-email");
        errorMessage.innerHTML = "email must be at least 1 character";
    }
    else(email.value.length > 1) {
        errorMessage.innerHTML ="approved";
    }

    console.log("hello");
}





form.addEventListener("submit", validateform);

/*
const nameInput = document.querySelector("#name");

console.log(nameInput);

nameInput.addEventListener("#name", () => {
    nameInput.setCustomValidity ("");
    nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
    if (nameInput.value === "") {
        nameInput.setCustomValidity("enter your username!");
    }
    else {
        nameInput.setCustomValidity(
            "username can only contain upper and lowercase letters. Try again!"
        );
    }
});
*/