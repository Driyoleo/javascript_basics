

/******** string ********/

// defination: collection of characters in an iterable form. 

// we can define string object by "" double quotation or '' single quotation :

var str = "abc";
var str = 'abc';

// notice :

str = "i don't like red color"              // is correct
// str = "i don"t like red color"           // error : cause due to  double quotation at don"t the string ends early.


/*------------------------------------------------------------------------------------------------------------------------------------------*/


// two ways to solve this:

// 1> template literals: instead of quotation use backticks ``.

// syntax:

str = `i don't like red color`;

// extra: we can add variables into a string through template literals.

var num = 2 ;
str = `I have ${num} cars .` ;
console.log(str)                            // output : I have 2 cars.




// 2> escape sequence : These are special characters....
//                                                      \' -->(')
//                                                      \" -->("").... etc

// syntax:

str = "i don\'t like red color" ;           // output : i don't like red color

// notice : these looks like two character in string but ... they are counted as single character and also have one index.

str = "haven\'t"
console.log("number of characters in string = " + str.length)
for (e in str){
    console.log(e + "------>" + str[e])
}

/* 
output :

number of characters in string = 7                       // here instead of 8 we get 7
0------>h
1------>a
2------>v
3------>e
4------>n
5------>'                                                // here \' get's a single index 5 and represnted as '
6------>t

*/

/*

Comments :D

*/

// If you want the escape character in the string you have to escape it also like below

str = "\\\\\\\somestring";
console.log(str); // value is \\\somestring
 
// So the only comment I would have regarding strings is that when working directly with HTML, it is better to use single quotes or template literals.
// HTML uses "" so using them in javascript to build HTML strings can become cumbersome as you have to escape every " in the HTML if using double quotes for the string itself.

// Also strings are objects in javascript (everything is an object) which means we can access methods on the string such as below

"chess".charAt(1); // gives value "h"
"chess"[2]; // gives value "e"
"chess".toUpperCase(); // gives value "CHESS"
"chess".toUpperCase(); // gives value "CHESS"
"chess".split(''); // gives value "['c','h','e','s','s']"
"chess".split('')[3].toUpperCase(); // gives value "S"

// One more thing there are primitive strings, and object strings
const str = "che"; // literal value which has access to object methods
const obj = new String("che"); // object value which is different to above

console.log(str === obj); // false even though the strings are the same

// We can go into these more later but best to just take note of primitive values vs instantiated objects 