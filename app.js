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
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);



sayHello('Brad', 'Traversy');