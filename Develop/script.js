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

// These 'if' statements react to the boolean true or false value from each charater type confirmation prompt.
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

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

