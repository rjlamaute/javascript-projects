const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(3) + str.slice(0,3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is ${str} and the modified string is ${newString}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters to relocate: ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let errorMessage = "";

if(userInput > str.length) {
    userInput = 3;
    errorMessage += "Error: input is longer than the word. Defaulted to moving three characters. \n";
}

console.log(errorMessage + `The original string is ${str} and the modified string is ${str.slice(userInput) + str.slice(0,userInput)}`);
