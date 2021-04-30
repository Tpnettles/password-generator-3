// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCaseInput = document.getElementById('lowerCase');
let upperCaseInput = document.getElementById('upperCase');
let numericInput = document.getElementById('numeric');
let specialCharacterInput = document.getElementById('specialCharacter');

function generatePassword() {
	let lengthOfUserPassword = parseInt(prompt('Length of password? (8-128 char)'));
	if (lengthOfUserPassword < 8 || (lengthOfUserPassword) > 128 ){
		alert('invalid password')
	};
	//let passwordCriteria = prompt('Choose lowercase, uppercase, numeric, and/or special characters.');
	let specialCharacters = ['!','@','$','#','&','*','(',')'];
	let numeric = [2,4,6,8,0,1,3,5,7,9];
	let lowerCase = ['a', 'b', 'c','d', 'e', 'f','g', 'f', 'h','i', 'j', 'k'];
	let upperCase = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H'];
	let allchars = lowerCase.concat(upperCase);
	let passwordLength = lengthOfUserPassword;
	let password = [];
	
	
	function getRandom(arr) {
	  let index = Math.floor(Math.random() * arr.length);
	  return arr[index];
	}
	/* get random lowercase letter */

	if (lowerCaseInput.checked){
		password.push(getRandom(lowerCase));
		
		console.log(password);	
	}
	if (upperCaseInput.checked){
		password.push(getRandom(upperCase));
		console.log(password);	
	}if (numericInput.checked){
		password.push(getRandom(numeric));
		console.log(password);	
	}if (specialCharacterInput.checked){
		password.push(getRandom(specialCharacters));
		console.log(password);	
	}
	
	
	 for (i = 0; i < password.length; i++) {
	 password.push(getRandom(allchars));
	
	
	return password.join("")
	} 
	
	
	};
	function writePassword() {
		 password = generatePassword();
		var passwordText = document.querySelector("#password");
	  
		passwordText.value = password;
	  
	  }
	generateBtn.addEventListener("click", writePassword);


	// Write password to the #password input
	// Add event listener to generate button



