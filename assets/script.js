// Assignment Coden
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var numeric = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// alert("Welcome to DNC's password generator!!");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var usersChoices = "";
  var passWord = "";
  var lenght = window.prompt(
    "Please enter the character length of your password (8-128)"
  );

  if (lenght >= 8 && lenght <= 128) {
    var chosenUpper = window.confirm(
      "Would you like Uppercase letters in your password?"
    );
    var chosenLower = window.confirm(
      "Would you like Lowercase letters in your password?"
    );
    var chosenNum = window.confirm("Would you like Numbers in your password?"
    );
    var chosenSpec = window.confirm(
      "Finally, would you like Special characters in your password"
    );

    if (chosenUpper === true) {
      usersChoices = usersChoices.concat(upperCase);
    }
    if (chosenLower === true) {
      usersChoices = usersChoices.concat(lowerCase);
    }
    if (chosenNum === true) {
      usersChoices = usersChoices.concat(numeric);
    }
    if (chosenSpec === true) {
      usersChoices = usersChoices.concat(special);
    } else {
      
    }
  } else {
    alert("Invalid response, please try again.");
  }

  for (var i = 0; i < lenght; i++) {
    var passString = Math.floor(Math.random() * usersChoices.length);
    passWord = passWord + usersChoices[passString];
  }

  return passWord;
}

generateBtn.addEventListener("click", writePassword);
