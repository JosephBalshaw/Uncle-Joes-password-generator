// Assignment Code
var passwordLength = 10;
var empty = [];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const specialCharacter = ["!","£","$","%","^","&","*","@","~","?","/","<",">"];
const number = ["0","1","2","3","4","5","6","7","8","9"];

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword(){
  getprompt();//call the get prompt function
  var password2 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password2;//writes the password2 to the window

}

function getprompt(){  
  passwordLength = parseInt(prompt("How long do you want your password to be?"));//prompts user for the length of the password to be generated
  if (passwordLength<8 ) {
    alert("password too short");//tells the user that the password is too short
  }
  if (passwordLength>128) {
    alert("password too long")// tells the user if the password is too long
  }
  if (confirm("Do you want the password to contain upper case letters?"))
  {
    empty = empty.concat(upperCase);//adds upperCase array to empty array
  }
  if (confirm("Do you want the password to contain lower case letters?"))
  {
    empty = empty.concat(lowerCase);//adds lowerCase array to empty array
  }
  if (confirm("Do you want the password to contain special characters?"))
  {
    empty = empty.concat(specialCharacter);// adds apecialCharacter to empty array
  }
  if (confirm("Do you want the password to contain numbers?"))
  {
    empty = empty.concat(number);// adds number array to empty array
  }  
}

function generatePassword(){
  var password = "";//empty variable password
  for (var i = 0; i < passwordLength; i++) {// loops for number of character length stated in prompt function
    var randomChar = Math.floor(Math.random()*empty.length);//generates number from 0 to empty array length and selects a character with that index
    password = password + empty[randomChar];// adds the gererated character to the password array.
  }  
  return password;//returns the password variable when the function is completed 
}


