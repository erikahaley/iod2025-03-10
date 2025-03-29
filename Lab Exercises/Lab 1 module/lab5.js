//Lab 5 instructions: Created an array called DCComics and assigned 5 elements to it.
const DCComics = ["Superman", "Batman", "Aquaman", "Wonder Woman", "Robin"];
//Then I created a function called printArray and assigned it to printArray.
function printArray(DCComics) {
  console.log(DCComics);
}

printArray(DCComics);
//console logged the following 5 elements to the array: Superman, Batman, Aquaman, Wonder Woman, Robin

//Section 2 Replaced the 1st and 4th element of the array with "Catwoman" and "Harley Quinn"
printArray(DCComics);

//Section 3: Removed the last element from the array
DCComics.pop();
printArray(DCComics);

//Section 4 Added an element into to the Array named "Joker" to the front of the list.
DCComics.unshift("Joker");
printArray(DCComics);
