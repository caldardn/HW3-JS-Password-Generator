// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var numeric = "1234567890";
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";



alert("Welcome to DNC's password generator!!")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword(){
  var usersChoices = ""
  var thePassWord = ""
  var length = prompt("Please enter the character length of your password (8-128)")

  if(length >=8 && length <= 128){
    var upperCase = confirm("Would you like Uppercase letters in your password?")
    var lowerCase = confirm("Would you like Lowercase letters in your password?")
    var numeric = confirm("Would you like Numbers in your password?")
    var special = confirm("Finally would you like Special characters in your password")
  }
}



generateBtn.addEventListener("click", writePassword);
