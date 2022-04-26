// Assignment Code
const generateBtn = document.querySelector("#generate");
//get the password length function

const getPasswordLength = () => {

const lengthPassword = prompt ("what is the password length you'd desire")
const lengthPasswordNum = parseInt(lengthPassword)


if (Number.isNaN(lengthPassword)) {
  alert ("please eneter a number");
  return null;}

 //conditional statement to ensure password is more than 8 characters
 else if (lengthPassword < 8){
    alert ("password length must be more than 8 characters");
    return null;}


//conditional statement to ensure password is less than 128 characters
   else if (lengthPassword > 128) {
      alert ("password length must be less than 128 characters");
      return null; 
    }
//If requirments are met display on console how many number the password is
else {console.log(lengthPassword)
}
  }


const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const createRandomPassword = () => {
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
