// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwInput = document.querySelector("#password-input");
const passwConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

[firstNameInput, lastNameInput, emailInput, passwInput, passwConfirmInput].forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("is-valid", "is-invalid");
  });
});

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwInput.onkeyup = () => {
  passwInput.classList.remove("is-valid");
  passwInput.classList.remove("is-invalid");
};

passwConfirmInput.onkeyup = () => {
  passwConfirmInput.classList.remove("is-valid");
  passwConfirmInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false

  // validate first name
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
    isFirstNameOk = false
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last names
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
    isFirstNameOk = false
  } else {
    lastNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate email
  if (!validateEmail(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
    isFirstNameOk = false
  } else {
    emailInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate password
  if (passwInput.value.length < 6) {
    passwInput.classList.add("is-invalid");
    isFirstNameOk = false
  } else {
    passwInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate confirm password
  if (passwConfirmInput.value !== passwInput.value || passwConfirmInput.value.length < 6) {
    passwConfirmInput.classList.add("is-invalid");
    isFirstNameOk = false
  } else {
    passwConfirmInput.classList.add("is-valid");

    isFirstNameOk = true;
  }

  if (isFirstNameOk) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  [firstNameInput, lastNameInput, emailInput, passwInput, passwConfirmInput].forEach((input) => {
    input.value = "";
    input.classList.remove("is-valid", "is-invalid");
  });
};
