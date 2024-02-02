// Code your orbitCircumference function here:

function orbitCircumference(radius) {
  return 2*Math.PI*radius;
}

// Code your missionDuration function here:

function missionDuration(orbitsCompleted, orbitRadius=2000, orbitalSpeed = 28000) {
  let distance = orbitCircumference(orbitRadius);
  distance *= orbitsCompleted;
  return Math.round((distance/orbitalSpeed) * 100) / 100;
}

//console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidateObject, orbitRadius=2000, orbitalSpeed=28000) {
  let spacewalkHours = missionDuration(3, orbitRadius, orbitalSpeed);
  let oxygenConsumed = Math.round(candidateObject.o2Used(spacewalkHours)*1000)/1000;
  return `${candidateObject.name} will perform the spacewalk, which will last ${spacewalkHours} hours and require ${oxygenConsumed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };

 let crew = [candidateA,candidateC,candidateE];

 console.log(oxygenExpended(selectRandomEntry(crew)));
