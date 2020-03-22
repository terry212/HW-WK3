// Assignment Code
var generateBtn = document.querySelector("#generate");
// create 

var typeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var typeLowercase = typeUppercase.toLowerCase();
var typeNumeric = "0123456789"
var typeSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "

// create a function to run the all the conditions before allowing a password to be generated

function passwordUserCriteriaCheck() {
  // Prompt for password criteria
  var pwCriteria = confirm("Please select password criteria");
  while (pwCriteria) {
    // prompt for password length; min = 8, max = 128
    var pwLength = prompt("Please enter a character length between 8 and 128 characters.")
    if (pwLength > 8 && pwLength < 128) {
      var pwLengthValidation = true;
    } else {
      alert("Invalid Entry. Please try again using a length between 8 and 128  characters.");
      var pwLengthValidation = false;
      pwCriteria = true;
    }

    if (pwCriteria == false) {
      alert("You must click OK to proceed foward! Please click Generate Password and try again.");
      return;
    }

    if (pwLengthValidation == true) {
      // prompt for character types
      // lowercase, uppercase, numeric, and/or special characters
      var charTypes = ["lowercase", "uppercase", "numeric", "special characters"];
      var pwCharType = prompt("select one or more charater type. Choose 1: lowercase 2: uppercase 3: numeric 4: special characters")
      break;
    } else {
      return;
    }
  }
}
//   WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters


function generatePassword() {

}
// creation of the generate password function

generateBtn.addEventListener("click", generatePassword());

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