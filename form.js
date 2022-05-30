const errorContainer = document.getElementById('error');
const password = document.getElementById('password');
const passwordConfirmed = document.getElementById('passwordConfirmation');
const formSendingButton = document.querySelector(".submitButton");
let textcontent = "";


function showError() {
    if (password.value === '' || passwordConfirmed.value === '') {
        textcontent = "*You should type a password and confirm it ";
        errorContainer.textContent = textcontent;
        password.style.borderColor = "red";
        passwordConfirmed.style.borderColor = "red";
        errorContainer.style.color = "red";
    } else if (!(password.value === passwordConfirmed.value)) {
        textcontent = "* Password do not match";
        errorContainer.textContent = textcontent;
        password.style.borderColor = "red";
        passwordConfirmed.style.borderColor = "red";
        errorContainer.style.color = "red";
    } else {
        textcontent = "password confirmed";
        errorContainer.textContent = textcontent;
        errorContainer.style.color = "green";
    }

}
formSendingButton.addEventListener('click', () => showError());