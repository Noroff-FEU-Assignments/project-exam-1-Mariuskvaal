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