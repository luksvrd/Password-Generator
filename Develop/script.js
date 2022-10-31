const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function generatePassword() {
  // TODO: Write your code here

  // Window prompt asking the user to input how many characters they want in thier password.
  const userInput = window.prompt("how many characters do you want in your password?")

  // 'parseInt' is taking any sting value from the userInput and tunrning it into a number
  const passwordLength = parseInt(userInput)

  // 'if' passwordLength 'isNaN' (is it Not a Number) then user will be prompted with an alert and javascript will return out of the funciton. Preventing the rest of the code from running.
  // The following 2 'if' statements are separated so that we know which condition returned false.
if (isNaN(passwordLength)) {
  window.alert("That is not a number...")
  return
  }

  // If the user entered a number too big or too small, this 'if' statement will prompt them with an alert and prevent the rest of the code from running.
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

  // These confirmation prompts allow the user to choose which array of character types they would like to include in their password.
  const userWantsLowercasedCharacters = window.confirm("Would you like to include lowercase in your password?")
  const userWantsNumericCharacters = window.confirm("Would you like to include numeric characters in your password?")
  const userWantsSpecialCharacters = window.confirm("Would you like to include special characters in your password?")
  const userWantsUppercaseCharacters = window.confirm("Would you like to include uppercse in your password?")

  // The purpose of this Cart is to create an array comprised of any of the 4 character type arrays that the user chose.
// Starts out as an empty array and fills up as the user reacts to the prompts.
const characterCart = []

// These 'if' statements react to the boolean true or false value from each character type confirmation prompt.
// If true, the '.push' will add the chosen character type arrays to the Cart so that the code can index it and get random characters
  if (userWantsLowercasedCharacters === true) {
    characterCart.push(lowerCasedCharacters)
  }
  if (userWantsNumericCharacters === true) {
    characterCart.push(numericCharacters)
  }
  if (userWantsSpecialCharacters === true) {
    characterCart.push(specialCharacters)
  }
  if (userWantsUppercaseCharacters === true) {
    characterCart.push(upperCasedCharacters)
  }

    // This is the default category for code to index from if the user did not choose any character array during the confirmation prompts.
  // If the array or 'Cart' is empty, go ahead and push lowerCasedCharacters array
  if (characterCart.length === 0) {
    characterCart.push(lowerCasedCharacters)
  }

// Purpose of this function is to generate random integers ranging from min to max and return them to where they were called. (line 164 and 174)
// Math.floor drops the decimal point from all numbers
// If max is not defined, assume we want range from 0 to min
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  //  Interpolates random value
  const rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

// Purpose is to get a random item from a random position in the array.
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

  // This empty string is what we'll be adding a random characters to after each iteration of the 'for' loop.
  // Using 'let' because the value will change
  let generatedPassword = ""

  for (i = 0; i < passwordLength; i++) {
    // This 'randomList' is a random array of the 4 possible character type arrays
    const randomList = getRandomItem(characterCart)
    // This grabs a random character from the above 'randomList'
    const randomChar = getRandomItem(randomList)
    // Take 'generatedPassword' and add to itself the 'randomChar' that we created
    generatedPassword += randomChar
  }
  // Exit the function and return the generateedPassword result where it was initially called (line 188)
  return generatedPassword

}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// source:
// https://www.youtube.com/watch?v=JheVaV6bPvE&t=2106s
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://www.w3schools.com/jsref/met_win_prompt.asp
