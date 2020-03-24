// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare global variables
var typeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var typeLowercase = typeUppercase.toLowerCase();
var typeNumeric = "0123456789"
var typeSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var userCharType = ""
var randomPassword = ""

// create a function to run the all the conditions before allowing a password to be generated

function passwordUserCriteriaCheck() {
  // Prompt for password criteria
  var pwCriteria = confirm("Please select password criteria");
  if (pwCriteria) {
    // clear variables to prevent a concat of previous data is process is done repeatedly
    randomPassword = "";
    userCharType = "";
    // prompt for password length; min = 8, max = 128
    var pwLength = prompt("Please enter a character length between 8 and 128 characters.")
    if (pwLength >= 8 && pwLength <= 128) {
      length = pwLength;
      var pwLengthValidation = true;
    } else {
      alert("Invalid Entry. Please try again using a length between 8 and 128  characters.");
      var pwLengthValidation = false;
      // call back to start process all over again
      passwordUserCriteriaCheck();
    }
  } else {
    alert("You must click OK to proceed foward! Please click Generate Password and try again.");
  }
  if (pwLengthValidation == true) {
    // prompts for character types
    // lowercase, uppercase, numeric, and/or special characters
    var pwCharType1 = prompt("Would you like 'lowercase' character types included? Type 'yes' or 'no'").trim()
    pwCharType1 = pwCharType1.toLowerCase();
    if (pwCharType1 === "yes") {
      // concat an empty string variable with proper character type to be used in the password generator
      userCharType = userCharType + typeLowercase;
      var secondPrompt = true;
      // return userCharType;
    } else {
      secondPrompt = true;
    }
    if (secondPrompt) {
      var pwCharType2 = prompt("Would you like 'uppercase' character types included? Type 'yes' or 'no'").trim()
      pwCharType2 = pwCharType2.toLowerCase();
      if (pwCharType2 === "yes") {
        // concat an empty string variable with proper character type to be used in the password generator
        userCharType = userCharType + typeUppercase;
        var thirdPrompt = true;
        // return userCharType;
      } else {
        thirdPrompt = true;
      }
    }
    if (thirdPrompt) {
      var pwCharType3 = prompt("Would you like 'numeric' character types included? Type 'yes' or 'no'").trim()
      pwCharType3 = pwCharType3.toLowerCase();
      if (pwCharType3 === "yes") {
        // concat an empty string variable with proper character type to be used in the password generator
        userCharType = userCharType + typeNumeric;
        var fourthPrompt = true;
        // return userCharType;
      } else {
        fourthPrompt = true;
      }
    }
    if (fourthPrompt) {
      var pwCharType4 = prompt("Would you like 'special characters' character types included? Type 'yes' or 'no'").trim()
      pwCharType4 = pwCharType4.toLowerCase();
      if (pwCharType4 === "yes") {
        // concat an empty string variable with proper character type to be used in the password generator
        userCharType = userCharType + typeSpecial;
        var charTypeValid = true;
        // return userCharType;
      } else {
        charTypeValid = true;
      }
    }
    if ((charTypeValid) && (pwCharType1 !== "yes") && (pwCharType2 !== "yes") && (pwCharType3 !== "yes") && (pwCharType4 !== "yes")) {
      alert("At least one charater type must be selected!")
      // start all over again
      passwordUserCriteriaCheck();
    } else {
      // all criteria is met, generate password 

    }

  }

}

// creation of the generate password function

function generatePassword() {
  for (let i = 0; i < length; i++) {
    randomPassword = randomPassword + userCharType[Math.floor(Math.random() * userCharType.length)];
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  passwordUserCriteriaCheck();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);