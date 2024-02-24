/*******important properties of strings*******/

// 1> .length :   it gives length of the str or any object

// it's a method not function so don't put bracket in the end

// syntax :

const bike = 'ducati' ;
console.log( bike.length ) ;

// ecape sequence are counted as single character:

const car = 'pagani\*' ;            //here it's 8 characters
console.log( car.length ) ;         //but her it's showing 7 cause \* is taken as *


/********************************************************************************************************************/


// 2> .slice() :  provide a part of srting as per arguments.

// syntax :

// String.slice( <starting index> , <ending index> )              // note: it's goes on index less than the given ending index.

console.log(bike.slice(0,3));                                     // output : 'duc'

// if any argument is ommited it rasie error :

// console.log( bike.slice(,3))                                   // error

// but slice() returns the whole string :

console.log(bike.slice());                                        // output : 'ducati'

// if only one value is given then it is taken as starting index and goes till the end of the stirng :

console.log(bike.slice(4));                                       // output : 'ti'

// .slice can't go in reverse :

console.log(bike.slice(5,0));                                     // output : ''


/********************************************************************************************************************/


// 3> .concat() :   it returs a new string after concatinating two strings.

// syntax :

// string1.concat(string2 , string3 , string 4 ..........) 

console.log(bike.concat(car));                                   // output : ducatipagani*

// we can also use + operator in place of .concat():

console.log(bike + car);                                         // output : ducatipagani*


/********************************************************************************************************************/


// 4> .trim() :   remove spaces from the start and the end of a string given.

// syntax :

// String.trim() 

const str = '   hello    ';
console.log(str.trim());                                         // output : 'hello'


/********************************************************************************************************************/

// more will be added here whenever any important porperties noticed through the process of learning .
// you can also suggest some names of those properties I will understand them...





