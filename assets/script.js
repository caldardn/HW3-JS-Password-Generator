var generateBtn = document.querySelector("#generate");
var passCriteria = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  num: "1234567890",
  spec: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
};

alert("Welcome to DNC's password generator!!");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Code that will generate the password
function generatePassword() {
  var usersChoices = "";
  var passWord = "";
  var length = window.prompt(
    "Please enter the character length of your password (8-128)"
  );

  // confirming users selection

  if (length >= 8 && length <= 128) {
    var chosenUpper = window.confirm(
      "Would you like Uppercase letters in your password?"
    );
    var chosenLower = window.confirm(
      "Would you like Lowercase letters in your password?"
    );
    var chosenNum = window.confirm("Would you like Numbers in your password?");
    var chosenSpec = window.confirm(
      "Finally, would you like Special characters in your password"
    );

    // concatenating users choices

    if (chosenUpper === true) {
      usersChoices = usersChoices.concat(passCriteria.upper);
    }
    if (chosenLower === true) {
      usersChoices = usersChoices.concat(passCriteria.lower);
    }
    if (chosenNum === true) {
      usersChoices = usersChoices.concat(passCriteria.num);
    }
    if (chosenSpec === true) {
      usersChoices = usersChoices.concat(passCriteria.spec);
    }
    if (!chosenUpper && !chosenLower && !chosenNum && !chosenSpec) {
      alert(
        "Invalid response, please select atleast one integer for your password."
      );
      return generatePassword();
    } else {
    }
  } else {
    alert("Invalid response, please try again.");
    return generatePassword();
  }

  for (var i = 0; i < length; i++) {
    var passString = Math.floor(Math.random() * usersChoices.length);
    passWord += usersChoices[passString];
  }

  return passWord;
}

generateBtn.addEventListener("click", writePassword);
