/***********basic methods to interact with browser***********/

// 1> alert() : invoke a mini window with a message passed as a string a argument in the method

// syntax :

alert('hi welcome to my first website');


// 2> prompt() :    used to take user input as string

// syntax :

var name = prompt('what is your name ?','username');            // username is the default value if nothing is typed in
console.log(name); // Terminate with colon!!! Always do this, it will catch you out if you are not careful

// An example of a gotcha with leaving out semi colons
const a = 1
const b = 2
(a+b).toString()
 // The above results in an error of :: Uncaught ReferenceError: b is not defined.

// As it compiles to without using semi colons
const a = 1;
const b = 2(a+b).toString();

// Using semi colons eradicates this and the code works as expected
const a = 1;
const b = 2;
(a+b).toString();


// 3> confirm() :   used to take user reply as true or false 

// syntax :

var age = confirm('you are above 18?');                         // age will get value as true or false 
if (age){
    age = 'above 18';
}
else{                                                           // on basis of age value it will assign string to age
    age = 'below 18';
}
console.log(age);                                               // that value will be printed in the console of the browser                                               

// can be simplified to the below
console.log((age ? 'above' : 'below') + ' 18'); // This is called ternary operator

// note all this can be run only on browser through html cause these methods are only available on browser 
