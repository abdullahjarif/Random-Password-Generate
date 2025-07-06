const passwordBox = document.getElementById("password");
const checkmark = document.getElementById("checkmark");
const copyIcon = document.getElementById("copyIcon"); // Accessing the copy image

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_~|{}+-/=";
const allChars = upperCase + lowerCase + number + symbol;

function creatPassword() {
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");

    // Show checkmark and hide the copy icon after copying
    checkmark.style.display = "inline";
    copyIcon.style.display = "none"; // Hide the copy icon

    // Hide the checkmark and show the copy icon after 2 seconds
    setTimeout(() => {
        checkmark.style.display = "none";
        copyIcon.style.display = "inline"; // Show the copy icon again
    }, 2000);
}
