//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArray.slice(4,5); // Starts at array[4] and removes 5 numbers after

//3. Delete the last number in the array that you created above.

myArray.splice(9, 1); //Starts at the 9th in the Array and removes 1.


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function replaceWords() {
    var currentString = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
    var banana = currentString.replace(/strawberry/ig, "banana");
    var bananas = banana.replace(/strawberries/ig, "Bananas");
    
    console.log(bananas);
}

replaceWords();




//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var peopleNames = [
    {firstName: "John", lastName: "Johnson"},
    {firstName: "Tim", lastName: "Timsen"},
    {firstName:  "Peter", lastName: "Petersen"}
]

var names = peopleNames.filter(function(firstName){
    return (firstName.lastName === "Timsen");
})

console.log(names);

//7. Create a simple function that logs the date.

function todaysDate () {
    var currentDay = new Date();
    var date = currentDay.getDate();
    var month = currentDay.getMonth();
    var year = currentDay.getFullYear();

    console.log(date + "/" + (month+1) + "/" + year);

};

todaysDate();
