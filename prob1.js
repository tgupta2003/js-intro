// Create a conditional statement that checks if two strings are equal.
 // Include an if and else statement. Create an alert that gives your user feedback based on the string defined. Test your statement with 
// different strings to make sure both alerts work.


let word1 = "Hello";
let word2 = "Hi";
let word3 = "Hey";
let word4 = "hi";



//make it case sensitive
if(word2.toLowerCase() == word4.toLowerCase()){
	console.log("The words you chose are the same!");

}else{
	console.log("The words you chose are NOT the same.");
}
