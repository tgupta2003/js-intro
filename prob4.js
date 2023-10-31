// Create function that takes in one argument that is passed 
// through a conditional statement. Return the result as an alert 
// or console.log. Test all of your conditions
// to make sure you can receive all of your results back. 


// let age = 20; 
// let age = 18; 
let age = 17; 


function canVote(age){
	let result; 
	if(age < 18){
		return alert("Not eligible to vote."); 
	}
	else{
		return alert("Eligible to vote!"); 
	}
}


//call function
canVote(age); 

