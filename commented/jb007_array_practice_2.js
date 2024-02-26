
/********array methods********/


// 1> .toString() :   it returns the array as a string of comma separated value

// syntax :

const num = [1,2,3,4] ;
console.log(num.toString());                                // ouptut : 1,2,3,4


// note :       if there is no quotation for string value inside the array 

const names = ['sam' , 'robin' , 'sherley'];
console.log(names.toString());                              // output : sam,robin,sherley


// note :       if there is any another array inside it then the brackets are removed

const mix = ['yes' , 1 ,2 , ['no' , 40]];
console.log(mix.toString());


// note :       if we do this 

const  height = ['class 2' , {'sam' : 120 , 'robert' : 125 }];
console.log(height.toString());                             // output : class 2,[object Object]



/************************************************************************************************************************************/


// 2> .join() :     join all the character into a string with elements separated with string character given 

// syntax :     

var arr = [1,2,3];
console.log(arr.join('-'));                                 // output : 1-2-3

// note :           it's behaviour is similar to .toString() property and it's default value is ','

arr = [1,[1,2],{'a':1,'b':2}];
console.log(arr.join());                                    // ouptut : 1,1,2,[object Object]


/************************************************************************************************************************************/


// 3> .pop() :         delete the last Element of the array and return the deleted element 

// syntax : 

var arr = [1,2,3,4];
console.log(arr.pop());                                     // output : 4
console.log(arr);                                           // output : [ 1, 2, 3 ]      


/************************************************************************************************************************************/


// 4> .push() :           add a element at the end of the array and retrurn the length of the arrar

// syntax : 

var arr = [1,2,3,4];
console.log(arr.push(6));                                   // output : 5
console.log(arr);                                           // output : [ 1, 2, 3, 4, 6 ]


/************************************************************************************************************************************/


// 5>  .shift() :            it's remove the first letter from the array and return the deleted element 

// syntax : 

var arr = [1,2,3,4];
console.log(arr.shift());                                   // output : 1
console.log(arr);                                           // output : [ 2, 3, 4 ]


/************************************************************************************************************************************/


// 6> .unshift() :             it's add a new element at the beginning of the arrar and return the new length of the arrar


// syntax :

var arr = [1,2,3,4];
console.log(arr.unshift(0));                                // output : 5
console.log(arr);                                           // output : [ 0, 1, 2, 3, 4 ]


/************************************************************************************************************************************/


// 7>  delete :                   it's an operator but can be used to delete any element in array but after that the index become empty
//                                and return in boolean value true or false  

// syntax :

var arr = [1,2,3,4];
console.log(delete arr[2]);                                 // output : true
console.log(arr);                                           // output : [ 1, 2, <1 empty item>, 4 ]


/************************************************************************************************************************************/


// more to be added and suggestions are invited .....











