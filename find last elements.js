function myFunction() {
    let inputArray =  [1,2,3,4,5,6,7,8];
    let numberofExtractions = 5;
	let lastElements = inputArray.slice(-numberofExtractions);
	console.log(lastElements);
}
myFunction();