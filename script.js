// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var useCap;
var useLow;
var useNum;
var useSpec;
var lengthOfPass;

function determineLength(){
  lengthOfPass=prompt("How many characters would you like you password to be?");
  lengthOfPass=Number(lengthOfPass);
  checkLength();
}

function checkLength(){
  if(!(Number.isInteger(lengthOfPass) && (lengthOfPass > 0))){
    alert("The length of your password must be a natural number.");
    determineLength();
  }

}

// determineLength();
// console.log("Length is "+lengthOfPass);
// console.log(Number.isInteger(lengthOfPass));

function determineCharacters(){
useCap=confirm("Do you want capital letters?");
useLow=confirm("Do you want lower case letters?");
useNum=confirm("Do you want to use numbers?");
useSpec=confirm("Do you want to use special characters?");
checkForOne();
}



function checkForOne(){
while( !(useCap || useLow || useNum || useSpec)){
  alert("You must use atleast one of these for your password.")
  determineCharacters();
}
}

// determineCharacters();
// console.log(useCap);
// console.log(useLow);
// console.log(useNum);
// console.log(useSpec);

function randomCapitalLetter(){
  var a=Math.floor(Math.random()*26)+65;
  a="&#"+a;
  return a;
}

// var b=randomCapitalLetter();
// console.log(b);

function randomLowerLetter(){
  var a=Math.floor(Math.random()*26)+97;
  a="&#"+a;
  return a;
}

// var c=randomLowerLetter();
// console.log(c);

function randomSpecialCharacter(){
  var a=Math.floor(Math.random()*15)+97;
  a="&#"+a;
  return a;
}

// var d=randomSpecialCharacter();
// console.log(d);

function randomNumber(){
  var a=Math.floor(Math.random()*15)+97;
  a="&#"+a;
  return a;
}

// var e=randomNumber();
// console.log(e);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
