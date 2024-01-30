let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
dog["astronautID"] = 4;
tardigrade["astronautID"] = 5;

// Create an array to hold the animal objects.

const crew = [superChimpOne, salamander, superChimpTwo, dog, tardigrade];

for(let i=0; i<crew.length; i++) {
   crew[i]["move"] = function() {
      return Math.floor(Math.random()*11);
   }
}

console.log(crew);
// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}


// Start an animal race!

function fitnessTest(arr) {
   const stepsArray = [];
   for(let i=0; i<arr.length; i++) {
      let steps = 0;
      let turns = 0;
      while(steps < 20) {
         steps += arr[i].move();
         turns++;
      }
      stepsArray.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return stepsArray;
}

for(let i=0; i<fitnessTest(crew).length; i++) {
   console.log(fitnessTest(crew)[i]);
}
