// Using if/else statements and strict equality operators, Javascript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy. 

let param1A = "cake";                 // variables to check if/else statement
let param1B = "cake";
let param2A = "pie";
let param2B = "pie";

if (param1A === param1B || param2A === param2B) {  // checks if either pair of variables are strictly equal to one another
    console.log("true")
} else{
    console.log("false")
}