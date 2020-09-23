// Arrow Functions
//Help us save lines of code and make things look neater. 

// const sayHello = function () {
//     console.log('Hello');
// }
// To turn above function into arrow function, get rid of function key word so you are left with the parenthesis. Then between the last parenthesis and the opening curly brace you want to put an arrow...which is a equals sign and a greater than sign...=>
// 

// since the function body is only one line above,  We can make this function even more compact by eliminating the code block in the parenthesis all together below.

// One line function does NOT need braces
// const sayHello = () => console.log('Hello'); 

// sayHello()


// One line returns - 
// const sayHello = () => 'Hello'; // This is how we return something without writing return, but to get the information we will have to console.log the function. 

// Same as above
// const sayHello = function () {
//     return 'Hello';
// }

// console.log(sayHello());

// Return Object
// const sayHello = () => ({ msg: 'Hello' }) // where you can run into trouble is when you'er returning an object literal. Basically because js is looking at the braces and everything in it as the function body, instead of an object literal. To fix this we wrap the object literal in parenthesis. Now it will log the object. 

// console.log(sayHello());


// single parameter does need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple parameters need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);



// sayHello('Brad', 'Traversy');

// Using arrow functions as callbacks

const users = ['Nathen', 'John', 'William']

// The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. Note: map() does not execute the function for array elements without values.

// const nameLengths = users.map(function (name) {
//     return name.length;
// });

// lets make this shorter using a arrow function

// const nameLengths = users.map((name) => {
//     return name.length;
// });

// shortest 

const nameLengths = users.map(name => name.length);


console.log(nameLengths);

// Fetch API
// A newer standard for dealing with http repuests. Fetch is a part of thw widow oject if you check in console for window. 

document.getElementById('button1').addEventListener('click', getText);

// before

// Get local text file data
function getText() {
    fetch('test.txt').then(function (res) { // Fetch function returns promises. And when you get a response from a promise you have to use .then()

        // console.log(res)
        // console.log(res.text())  // Gives us promise result which is 'This is a sample text file' in the console. To get a response from a promise we need to use .then().
        return res.text(); // We want to return the text method thats in prototype. // res.text() returns a promise so we call another .then() below. 
    }).then(function (data) { // Here we catch that promise from the return above then we get the data below. 
        console.log(data);  //we should get 'This is a sample text file'
        document.getElementById('output').innerHTML = data; // Here we output the data instead of only console.loging it.
    }).catch(function (error) {
        console.log(error);
    });

    

}

// after

// USING ARROW FUNCTIONS 
// Get local text file data
function getText() {
    fetch('test.txt').then(res => res.text()) 
        .then(data => { // Here we catch that promise from the return above then we get the data below. 
        console.log(data);  //we should get 'This is a sample text file'
        document.getElementById('output').innerHTML = data; // Here we output the data instead of only console.loging it.
    }).catch(error => console.log(error));
    
}