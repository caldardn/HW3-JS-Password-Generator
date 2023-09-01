// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var numeric = "1234567890";
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

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
  var length = prompt("Please enter the character length of your password (8-128)");
  console.log(length)

  if (length >= 8 && length <= 128) {
    var upperCase = confirm("Would you like Uppercase letters in your password?");
    var lowerCase = confirm("Would you like Lowercase letters in your password?");
    var numeric = confirm("Would you like Numbers in your password?");
    var special = confirm("Finally, would you like Special characters in your password");

    if (upperCase === true) {
      usersChoices = usersChoices.concat(upperCase);
    }
    if (lowerCase === true) {
      usersChoices = usersChoices.concat(lowerCase);
    }
    if (numeric === true) {
      usersChoices = usersChoices.concat(numeric);
    }
    if (special === true) {
      usersChoices = usersChoices.concat(special);
    } 
  }
   for (var i = 0; i < length; i++) {
    var passString = Math.floor(Math.random() + usersChoices.length);
    passWord = passWord + usersChoices[passString];
    console.log(passWord)
  }
  
  return passWord;
}


generateBtn.addEventListener("click", writePassword);
