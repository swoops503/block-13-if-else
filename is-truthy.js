// using if/else statements, create a JS code in a script tag that follows the following rules: 

// If the value is truthy, print true; 
/* If the value is falsy, print the corresponding result: 
   -"The boolean value false is falsy"
   -"The null value is falsy"
   -"Undefined is falsy"
   -"The number 0 is falsy(the only falsy number)"
   -"The empty string is falsy(the only falsy string"
*/ 

let testValue = "";

if (testValue == "I am a string") {  // tests for "I am a string" , unsure of how to test for specifically strings with characters
   console.log("true")
} else if (testValue = false) {  // tests if the boolean value of testValue is false
   console.log("The boolean value false is falsy")
} else if (testValue == null) {  // tests if testValue is a null value
   console.log("The null value is falsy") 
} else if (testValue == undefined) {  // tests if testValue variable is undefined
   console.log("undefined is falsy")
} else if (testValue == 0) {  // tests if testValue is equal to 0
   console.log("The number 0 is falsy(the only falsy number)")
} else if (testValue === "")  {  // tests if testValue is an empty string
   console.log("The empty string is falsy (the only falsy string")
}