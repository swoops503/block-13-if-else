/* Using if/else statements, JS code in a script tag that takes the sum of two numbers and prints the corresponding result: 
  - if total of sum is equal to less than -1000, print "-is less than -1000"
  - if total of sum is a negative number, print "is a negative number"
  - if total of sum is equal to 0, print "is equal to 0"
  - if total of sum is greater than 0 but less than or equal to 100, print "is larger than 0"
  - if total of sum is greater than 100, print "is greater than 100"
*/

let num1 = -5;
let num2 = 0;

let sum = num1 + num2;

if (sum < -1000) {    // first check to see if sum is less than -1000
    console.log(sum + " is less than -1000")
} else if (sum >= -1000 && sum < 0) {  // second check to see if sum is equal to or greater than -1000, and also if the sum is less than 0 
    console.log(sum + " is a negative number")
} else if (sum === 0) {   // third check to see if sum is strictly equal to 0 
    console.log(sum + " is equal to 0")
} else if (sum > 0 && sum <= 100) { // fourth check is to see if sum is greater than 0 and less than or equal to 100
    console.log(sum + " is greater than 0")
} else if (sum > 100) {  // final check to see if sum is greater than 100
    console.log(sum + " is greater than 100")
}