const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
const foodArray = food.split(",").sort();
const equipmentArray = equipment.split(",").sort();
const petsArray = pets.split(",").sort();
const sleepAidsArray = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
const cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinet = input.question("Select a cabinet from 0 to 3 in the cargo hold.")
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(cabinet > 3 || cabinet < 0) {
    console.log("Error: invalid input.")
} else {
    console.log(`The contents of the selected cabinet are ${cargoHold[cabinet]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let newCabinet = input.question("Select a cabinet from 0 to 3 to search for an item: ");

if(newCabinet > 3 || newCabinet < 0) {
    console.log("Error: invalid input.")
} else {
    let item = input.question("Select an item in the selected cabinet: ");
    if(cargoHold[newCabinet].includes(item)) {
        console.log(`Cabinet DOES contain ${item}`);
    }
    else {
        console.log(`Cabinet DOES NOT contain ${item}`);
    }
}
