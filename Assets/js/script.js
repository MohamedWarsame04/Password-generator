// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
    // get the password criteria
  const passwordCriteria = getPasswordCriteria();
  if (passwordCriteria.length === 0) {
    alert("choose minimum one option")
    return null;
  } else {
    const randomPassword = createRandomPassword([passwordLength, passwordCriteria]);
    return randomPassword;
}

};
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
else 
return lengthPassword;
  };


//get password criteria function
const getPasswordCriteria = () => {
  //vaariable to store boolean for inclusion of lowercase characters
  const lowercase = confirm ("do you want lowercase in your password?")

  //vaariable to store boolean for inclusion of lowercase characters
  const uppercase = confirm ("do you want uppercase in your password?")

   //vaariable to store boolean for inclusion of numeric characters
  const numeric = confirm ("do you want numeric in your password?")

   //vaariable to store boolean for inclusion of special characters
  const specialCharacter = confirm ("do you want special characteristics in your password?")

  //variable to store conditions of the password in array
  const passwordRequirements = [];

  //conditional statement for lowercase
    if (lowercase) {passwordRequirements.push("abcdefghijklmnopqrstuvwxyz")
  } 

  //conditional statement for uppercase  
  
    if (uppercase) {passwordRequirements.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }

  //conditional statement for numeric  
  
  if (numeric) {passwordRequirements.push("0123456789")
}

  //conditional statement for special characteristic  

  if (specialCharacter) {passwordRequirements.push("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~")
}
  console.log("passwordRequirements" + passwordRequirements);
  
  return passwordRequirements;



 
};

  // create random password function
 const createRandomPassword = (passwordLength, passwordCriteria) => {
  const passwordArray = [];

  for (let i = 0; 1 < passwordLength; i+= 1) {
    //select random categories from the array
    const randCategoriesIndex = Math.floor(Math.random() * passwordCriteria.length);
    console.log(randCategoriesIndex);

    //get random categories
    const randCategories = passwordCriteria[randCategoriesIndex];

    //get random index
    const randIndex = Math.floor(Math.random() * randCategories.length);

    //get random character
    const randCharacter = randCategories.charAt(randIndex);
    passwordArray.push(randCharacter);
  }
  console.log("passwordarray " + passwordArray);
  return passwordArray.join("");
    };

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
