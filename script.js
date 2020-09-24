// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  document.getElementById("password").innerHTML = generatePassword();

}

var useCap;
var useLow;
var useNum;
var useSpec;
var lengthOfPass;

// Prompt for length of password.
function determineLength(){
  lengthOfPass=prompt("How many characters would you like you password to be?");
  lengthOfPass=Number(lengthOfPass);
  checkLength();
}

// Check length for valid input.
function checkLength(){
  if(!(Number.isInteger(lengthOfPass) && (lengthOfPass > 0))){
    alert("The length of your password must be a natural number.");
    determineLength();
  }

}


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



function randomCapitalLetter(){
  var a=Math.floor(Math.random()*26)+65;
  a="&#"+a;
  return a;
}



function randomLowerLetter(){
  var a=Math.floor(Math.random()*26)+97;
  a="&#"+a;
  return a;
}



function randomSpecialCharacter(){
  var a=Math.floor(Math.random()*4)+35;
  a="&#"+a;
  return a;
}


function randomNumber(){
  var a=Math.floor(Math.random()*10)+48;
  a="&#"+a;
  return a;
}



function generatePassword(){
  determineLength();
  determineCharacters();
  var pass="";
  var i=0;
  var j=0;

while((i < lengthOfPass) && (j < 1000)){

  var numb=Math.floor(Math.random()*4);
  if(numb===0 && useCap){
    pass=pass+" "+randomCapitalLetter();
    i++;
  }
  if(numb===1 && useLow){
    pass=pass+" "+randomLowerLetter();
    i++;
  }
  if(numb===2 && useNum){
    pass=pass+" "+randomNumber();
    i++;
  }
  if(numb===3 && useSpec){
    pass=pass+" "+randomSpecialCharacter();
    i++;
  }
  j++;
}

return pass;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
