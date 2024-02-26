
/*********array*********/

// defination :     iterable object which contains different type of variables.

// syntax :     

const garrage = ['supra' , 'nissan GTR' , 'jaguar'];         // here garrage is the array object and inside it.. supra, nissan etc etc are elements

// note :

console.log(typeof garrage);                                // output : object - everything is an object :)


// accessing elements :       we can access elements through the indexes just like string.

console.log(garrage[0]);                                    // output : supra

// note : if the index is empty then it returns undefined :

console.log(garrage[13]);                                   // output : undefined 


// changing or adding value : 

console.log(garrage);                                      // output : [ 'supra', 'nissan GTR', 'jaguar' ]
garrage[0] = 'BMW M8';
console.log(garrage);                                      // output : [ 'BMW M8', 'nissan GTR', 'jaguar' ]                                 

// note : if any value is not present at given index then it will add that value to that index only :

garrage[100] = 'pagani';
console.log(garrage);                                      // output :  [ 'BMW M8', 'nissan GTR', 'jaguar', <97 empty items>, 'pagani' ]

// This looks great - arrays also have methods on them

garrage.push('honda civic'); // Pushes onto the end of the array
// Other methods
[].splice(1, 0) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Lots more methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

