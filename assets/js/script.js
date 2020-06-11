window.alert ("Click the red button and answer the prompts")

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var generatePassword = function(){
  var passwordLength = window.prompt("How long would you like your password? (enter a number from 8 to 128.)")
  var passwordLength = parseInt(passwordLength, 10);
    if (passwordLength < 8 || passwordLength > 128){
      window.alert ("Please enter a number from 8 to 128.");
      return "Try again.";
    }
    if (isNaN(passwordLength)){
      window.alert ("Please enter a number");
      return "Try again.";
    }
    else {
      var lowercase = window.confirm("Would you like your password to contain Lowercase letters? (If not click cancel.)");
      var uppercase = window.confirm("Would you like your password to contain Uppercase letters? (If not click cancel.)");
      var numeric = window.confirm("Would you like your password to contain numbers? (If not click cancel.)");
      var special = window.confirm("Would you like your password to contain symbols? (If not click cancel.)");

      var pwDomain = []
      
        if (lowercase){
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomLower())
          }
        }
        if (uppercase){
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomUpper())
          }
        }
        if (numeric){
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomNumber())
          }
        }
        if (special){
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomSpecial())
          }
        }
        if (!lowercase && !uppercase && !numeric && !special){
          window.alert ("You need to select at least one type of character.");
          return "Try again.";
        }

      pwOutput = ""

      for (let i = 0; i < passwordLength; i++) {
        pwOutput = pwOutput + pwDomain[Math.floor(Math.random() * pwDomain.length)];
      }
      
      return pwOutput
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
