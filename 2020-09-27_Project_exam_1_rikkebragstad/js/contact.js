const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("The message was sent");
    
/*----------------------- FIRSTNAME -----------------------------*/

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue, 2) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

/*----------------------- LASTNAME -----------------------------*/
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;

  if (checkInputLength(lastNameValue, 2) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

/*----------------------- MESSAGE -----------------------------*/
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageValue = message.value;

if (checkInputLength(messageValue, 15) === true) {
  messageError.style.display = "none";
} else {
  messageError.style.display = "block";
}
    
/*----------------------- EMAIL -----------------------------*/
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailValue = email.value;

if (validateEmail(emailValue)) {
  emailError.style.display = "none";
 } else {
   emailError.style.display = "block";
 }
}

function checkInputLength(value, lengthToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lengthToCheck) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(emailValue) {
  const regEx = /\S+@\S+\.\S+/;
  if (regEx.test(emailValue)) {
    return true;
  } else {
    return false;
  }
}
