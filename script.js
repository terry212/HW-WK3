// Assignment Code
var generateBtn = document.querySelector("#generate");
// create 

var typeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var typeLowercase = typeUppercase.toLowerCase();
var typeNumeric = "0123456789"
var typeSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "
var userCharType = ""
// var length;
 var pwLengthValidation;
// Request of the first password criteria



// create a function to run the all the conditions before allowing a password to be generated
debugger;
function passwordUserCriteriaCheck() {
  // Prompt for password criteria
  var pwCriteria = confirm("Please select password criteria");
  if (pwCriteria) {
    // prompt for password length; min = 8, max = 128
    var pwLength = prompt("Please enter a character length between 8 and 128 characters.")
    if (pwLength >= 8 && pwLength <= 128) {
      var pwLengthValidation = true;
      pwLength = length;
      // return length;
      // return pwLengthValidation;
    } else {
      alert("Invalid Entry. Please try again using a length between 8 and 128  characters.");
      var pwLengthValidation = false;
    }
  } else {
    alert("You must click OK to proceed foward! Please click Generate Password and try again.");
  }
  if (pwLengthValidation == true) {
    // prompt for character types
    // lowercase, uppercase, numeric, and/or special characters
    // var charTypes = ["lowercase", "uppercase", "numeric", "special characters"];
    var pwCharType1 = prompt("Would you like 'lowercase' character types included? Type 'yes' or 'no'")
    pwCharType1 = pwCharType1.toLowerCase();
    if (pwCharType1 === "yes") {
      // concat an empty string variable with proper character type to be used in the password generator
      userCharType = userCharType + typeLowercase;
      var secondPrompt = true;
      // return userCharType;
    } else {
      secondPrompt = true;
      // var pwCharType2 = prompt("Would you like 'uppercase' character type?")
      // if (pwCharType2) {
      //   userCharType = userCharType + typeUppercase;
      //   return userCharType;
      // } else {}
    }
    if (secondPrompt) {
      var pwCharType2 = prompt("Would you like 'uppercase' character types included? Type 'yes' or 'no'")
      pwCharType2 = pwCharType2.toLowerCase();
      if (pwCharType2) {
        // concat an empty string variable with proper character type to be used in the password generator
        userCharType = userCharType + typeUppercase;
        var thirdPrompt = true;
        // return userCharType;
      } else {
        thirdPrompt = true;
      }
    }
    if (thirdPrompt) {
      var pwCharType3 = prompt("Would you like 'numeric' character types included? Type 'yes' or 'no'")
      pwCharType3 = pwCharType3.toLowerCase();
      if (pwCharType3) {
        // concat an empty string variable with proper character type to be used in the password generator
        userCharType = userCharType + typeNumeric;
        var fourthPrompt = true;
        // return userCharType;
      } else {
        fourthPrompt = true;
      }
    }
    if (fourthPrompt) {
      var pwCharType4 = prompt("Would you like 'special characters' character types included? Type 'yes' or 'no'")
      pwCharType4 = pwCharType4.toLowerCase();
      if (pwCharType4) {
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
      generatePassword();
    }

  } 
  // else {
  //   // if password length validation fails
  //   alert("Please ")
  // }

}

function generatePassword() {
  for (let i = 0; i < length; i++) {
    var randomPassword = userCharType[Math.floor(Math.random() * userCharType.length)];

  }
}
// creation of the generate password function
// generateBtn.addEventListener("click", generatePassword());

// Write password to the #password input
function writePassword() {
  passwordUserCriteriaCheck();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// validation & required field set

// generate password


// send alert or write to page