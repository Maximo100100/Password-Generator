Code with console logs

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

console.log("Test lowercase: " + randomLower());
console.log("Test Uppercase: " + randomUpper());
console.log("Test Number: " + randomNumber());
console.log("Test Special: " + randomSpecial());

var generatePassword = function(){
  var passwordLength = window.prompt("How long would you like your password? (enter a number from 8 to 128.)")
  var passwordLength = parseInt(passwordLength, 10);
  console.log(typeof passwordLength)  
  console.log(passwordLength)
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

      console.log("lowercase " + lowercase);
      console.log("uppercase " + uppercase);
      console.log("numbers " + numeric);
      console.log("special " + special);
      
        if (lowercase){
          console.log("lowercase selected");
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomLower())
          }
        }
        if (uppercase){
          console.log("uppercase selected");
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomUpper())
          }
        }
        if (numeric){
          console.log("numeric selected");
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomNumber())
          }
        }
        if (special){
          console.log("special selected");
          for (let i = 0; i < passwordLength; i++) {
            pwDomain.push(randomSpecial())
          }
        }
        if (!lowercase && !uppercase && !numeric && !special){
          console.log("none selected");
          window.alert ("You need to select at least one type of character.");
          return "Try again.";
        }
      
      console.log("pwdomain: " + pwDomain)
      
      pwOutput = ""

      for (let i = 0; i < passwordLength; i++) {
        pwOutput = pwOutput + pwDomain[Math.floor(Math.random() * pwDomain.length)];
      }
      console.log(pwOutput)
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