// Using if/else statements and strict equality operators, Javascript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy. 

let param1A = "cat";                 // variables to check if/else statement
let param1B = "cat";
let param2A = 6;
let param2B = "6";

if (param1A === param1B || param2A === param2B) {  // checks if either pair of variables are strictly equal to one another
    console.log("true")
} else{
    console.log("false")
}

let param3A = "five";
let param3B = 5;
let param4A = "dog";
let param4B = "dawg";

if (param3A === param3B || param4A === param4B) {
    console.log("true")
} else {
    console.log("false")
}

let param5A = 0;
let param5B = false;
let param6A = "horse";
let param6B = "horse";

if (param5A === param5B || param6A === param6B) {
    console.log("true")
} else {
    console.log("false")
}

let param7A = "eight";
let param7B = "eight";
let param8A = "ate";
let param8B = "ate";

if (param7A === param7B || param8A === param8B) {
    console.log("true")
} else {
    console.log("false")
}

let param9A = 11;
let param9B = "eleven";
let param10A = "four";
let param10B = "for";

if (param9A === param9B || param10A === param10B) {
    console.log("true")
} else {
    console.log("false")
}

let param11A = "cake";
let param11B = "cake";
let param12A = "pie";
let param12B = "pie";

if (param11A === param11B || param12A === param12B) {
    console.log("true")
} else {
    console.log("false")
}