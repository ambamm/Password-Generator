// Assignment code here
//create variables to hold the character options for special, lowercase, uppercase & numeric characters

//Create an empty array that will hold the users selected characters 

// on game start, prompt for users number of character and hold a variable 
var numChars = prompt("how many characters would you like in your passord")

//check the users input and confirm they put in a number between 8 and 128, and that it is numeric

//write function that validates users input
function validateUserInput(chars) {
    if (chars < 8 || chars > 128) {
        return null
    }
}
//we've now validated the input and it's condition

//after validatation create variables for character selctions
var specialChars = confirm ("Would you like special characters")
var numericalNums = confirm ("Would you like any numbers")
var lowerChars = confirm ("Would you like any lower case letters")
var upperChars = confirm ("Would you like any upper case letters")
//when they answer, special characters will be true of they say ok. If false, the numerical will be false 

//now we need to validate they've selcted at least one option was selected
if (!specialChars && !numChars && !lowerChars && !upperChars) {
    alert("you need to select at least one type of character");
    return generatePassword () //it will end the function then and there and recall that function at the top and ask again how many characters they want, etc and will loop till they say yes to one 

}

//now we can write if statements to start pushing things into our arrays we created 
//after validation is complete, start pushing the selcted characters into possible chars array

if (specialChars) {
    possibleChars 
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