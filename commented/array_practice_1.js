
/*********array*********/

// defination :     iterable object which contains different type of variables.

// syntax :     

const garrage = ['supra' , 'nissan GTR' , 'jaguar'];         // here garrage is the array object and inside it.. supra, nissan etc etc are elements

// note :

console.log(typeof garrage);                                // output : object


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


