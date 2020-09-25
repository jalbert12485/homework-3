// Assignment Code
var generateBtn = document.querySelector("#generate");

// Change content of password.
function writePassword() {

  document.getElementById("password").innerHTML = generatePassword();

}

//Declaring need variables.

// useCap defines whether or not capital letters should be used.
var useCap;
// useLow defines whether or not lower case letters should be used.
var useLow;
// useNum defines whether or not numbers should be used.
var useNum;
// useSpec defines whether or not special numbers should be used.
var useSpec;
// lenghtOfPass is the desired length of the password.
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

// Prompt user to see what type of characters they want to use.
function determineCharacters(){
useCap=confirm("Do you want capital letters?");
useLow=confirm("Do you want lower case letters?");
useNum=confirm("Do you want to use numbers?");
useSpec=confirm("Do you want to use special characters?");
checkForOne();
}


// Check to make sure you have atleast one type of character to make your password from.
function checkForOne(){
while( !(useCap || useLow || useNum || useSpec)){
  alert("You must use atleast one of these for your password.")
  determineCharacters();
}
}


// Generate a random capital letter.
function randomCapitalLetter(){
  // Generate the unicode number of capital letter.
  var a=Math.floor(Math.random()*26)+65;
  // Convert to unicode.
  a="&#"+a;
  return a;
}


//Generate a random lower case letter in unicode.
function randomLowerLetter(){
  var a=Math.floor(Math.random()*26)+97;
  a="&#"+a;
  return a;
}


// Generate a random special character in unicode.
function randomSpecialCharacter(){
  var a=Math.floor(Math.random()*4)+35;
  a="&#"+a;
  return a;
}

// Generate a random number in unicode.
function randomNumber(){
  var a=Math.floor(Math.random()*10)+48;
  a="&#"+a;
  return a;
}


//Generate the password.
function generatePassword(){
  determineLength();
  determineCharacters();
  var pass="";
  var i=0;
  var j=0;


  //Loops until we have the proper number of characters or we've run the loop 1000 times.
  //Note if any person would want a very long password (~1000 characters or more) we would to change this.
while((i < lengthOfPass) && (j < 1000)){

  var numb=Math.floor(Math.random()*4);
  // If the random number is a 0 and capitals are used, then we adjoin a capital letter to the password.  Next we keep track of the fact that we added this character.
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
