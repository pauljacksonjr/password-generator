// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  // Password criteria


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




  function generatePassword() {
    var characterArray = "";
    var password = "";

    var alphaLowerCase = "abcdefghijklmnopqrstuvwxyz";
    var alphaUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var number = "0123456789";
    var specialCharacter = "!@#$%^?&*()_+][|-':.>;</";
    

    var charLength = prompt("How many charcacters would you like your password to be? *Remember it must be between 8 and 128 characters.");
    if (charLength < 8 || charLength > 128) {

      var charLength = alert("Please enter a number between 8 - 128");

      if (charLength < 8 || charLength > 128) {
        exit;
      }

    

    }

    var lower = confirm("Click OK for lowercase letters");
    var upper = confirm("Click for upper case letters");
    var numeric = confirm("Click OK for numeric characters");
    var special = confirm("Click OK to add special characters!");

    if (alphaLowerCase) {
      characterArray = characterArray.concat(alphaLowerCase);
    }

    if (upper) {
      characterArray = characterArray.concat(alphaUpperCase);

    }

    if (number) {
      characterArray = characterArray.concat(number);
    }

    if (specialCharacter) {

      characterArray = characterArray.concat(specialCharacter);
    }
    if (special === false && lower === false && upper === false && numeric === false) {
      alert("Please choose at least one parameter");
      exit;
    }

    for (var i = 0; i < charLength; i++) {
      var randomNumber = Math.floor(Math.random() * characterArray.length);
      var character = characterArray[randomNumber];
      password += character;
    }

    return password;


  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


