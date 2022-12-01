// // Assignment code here
// //create variables to hold the character options for special, lowercase, uppercase & numeric characters

// //Create an empty array that will hold the users selected characters

// // on game start, prompt for users number of character and hold a variable
// var numChars = prompt("how many characters would you like in your passord")

// //check the users input and confirm they put in a number between 8 and 128, and that it is numeric

// //write function that validates users input
// function validateUserInput(chars) {
//     if (chars < 8 || chars > 128) {
//         return null
//     }
// }
// //we've now validated the input and it's condition

// //after validatation create variables for character selctions
// var specialChars = confirm ("Would you like special characters")
// var numericalNums = confirm ("Would you like any numbers")
// var lowerChars = confirm ("Would you like any lower case letters")
// var upperChars = confirm ("Would you like any upper case letters")
// //when they answer, special characters will be true of they say ok. If false, the numerical will be false

// //now we need to validate they've selcted at least one option was selected
// if (!specialChars && !numChars && !lowerChars && !upperChars) {
//     alert("you need to select at least one type of character");
//     return generatePassword () //it will end the function then and there and recall that function at the top and ask again how many characters they want, etc and will loop till they say yes to one

// }

// //now we can write if statements to start pushing things into our arrays we created
// //after validation is complete, start pushing the selcted characters into possible chars array

// if (specialChars) {
//     possibleChars
// }

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

function passwordOptions () {
  // () means it doesn't need to run, but will perform whatever task is assigned inside
  var numChars = parseInt (
    prompt ('how many characters would you like in your passord')
  );

  var specialChars = confirm ('Would you like special characters');
  var numericalNums = confirm ('Would you like any numbers');
  var lowerChars = confirm ('Would you like any lower case letters');
  var upperChars = confirm ('Would you like any upper case letters');

  var options = {
    //storing (arrays) variables in an object
    numChars,
    specialChars,
    numericalNums,
    lowerChars,
    upperChars,
  };

  return options;
}

function generatePassword () {
  //tied to a button...?
  console.log (`this is upperCase ${upperCase}`); // string intropelalalalala
  var options = passwordOptions (); //if labeled to a let, it could only exist inside
  var possibleChars = [];  //same deal as below 
  var password = [];    //creating erray for PW

  // conditional staement with a 4loop inside to get the random characters

  if (options.upperChars === true) {
    //using Dot to access arrays
    //going through and selewcting randoOne
    for (let i = 0; i < options.numChars; i++) {
      var charIndex = Math.floor (Math.random () * upperCase.length); //find the length of how many uper chase there are, limited from 0-26
      //taking the lowest decimal floor
      var randChar = upperCase[charIndex];
      possibleChars.push (randChar);
    }
  }

  if (options.lowerChars === true) {
    //cLog this b4 if statemet
    for (let i = 0; i < options.numChars; i++) {
      var charIndex = Math.floor (Math.random () * lowerCase.length); //building the PW, going through these characters declared, getting the length anf grabbing the lowest/round/down and storing
      var randChar = lowerCase[charIndex];
      possibleChars.push (randChar); //conCat to possibleChars array
    }
  }

  if (options.numericalNums === true) {
    for (let i = 0; i < options.numChars; i++) {
      var charIndex = Math.floor (Math.random () * numbers.length);
      var randChar = numbers[charIndex];
      possibleChars.push (randChar);
    }
  }

  if (options.specialChars === true) {
    for (let i = 0; i < options.numChars; i++) {
      var charIndex = Math.floor (Math.random () * symbols.length);
      var randChar = symbols[charIndex];
      possibleChars.push (randChar);
    }
  }

  for (let i = 0; i < options.numChars; i++) {
    var charIndex = Math.floor (Math.random () * possibleChars.length);
    var randChar = possibleChars[charIndex];
    password.push (randChar);
  }

  return password.join ('');  //.join in the fun we're running 
}

// Get references to the #generate element
var generateBtn = document.querySelector ('#generate');

// Write password to the #password input
function writePassword () {
  var password = generatePassword ();   //envoking as soon as button/event lsistner clicked/ran (serries of events )
  var passwordText = document.querySelector ('#password');

  passwordText.value = password;   //storing PW in the value attributeed to this objecty 
}

// Add event listener to generate button
generateBtn.addEventListener ('click', writePassword); //listening for the click event then then running the functionWP
