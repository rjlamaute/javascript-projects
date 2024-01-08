// Declare and assign the variables below
let shuttle_name = "Determination";
let shuttle_speed = 17500;
let dist_to_Mars = 225000000;
let dist_to_Moon = 384400;
let miles_per_km = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttle_name));
console.log(typeof(shuttle_speed));
console.log(typeof(dist_to_Mars));
console.log(typeof(dist_to_Moon));
console.log(typeof(miles_per_km));

// Calculate a space mission below
let miles_to_mars = dist_to_Mars * miles_per_km;
let hours_to_Mars = miles_to_mars / shuttle_speed;
let days_to_Mars = hours_to_Mars / 24;
// Print the results of the space mission calculations below
console.log(shuttle_name + "will take " + days_to_Mars + "days to reach Mars");
// Calculate a trip to the moon below
let miles_to_Moon = dist_to_Moon * miles_per_km;
let hours_to_Moon = miles_to_Moon / shuttle_speed;
let days_to_Moon = hours_to_Moon / 24;
// Print the results of the trip to the moon below
console.log(shuttle_name + "will take " + days_to_Moon + "days to reach the Moon");
