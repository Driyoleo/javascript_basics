/******************looping through arrays******************/


// 1> forEach loop :

// syntax :

var num = [1, 2, 3, 4, 5];
num.forEach((Element, index, arr) => {
    console.log(Element, index, arr)
})

//here for each loop the element is assigned to first variable and index assigned to second variable and whole array is assigned to third variable

// output :

// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]


/*****************************************************************************************************************************************/


// 2> map :     it also work similarly on the array but at last it returns a new array of the returned valued in each loop

// syntax :

var num1 = [1, 2, 3, 4, 5];
// suppose i need a new arrar of the squares of each number
var num2 = num1.map((element, index, arr) => {              // you can ommit the index and arr variable if you don't want
    return element ** 2;
});
console.log(num2);                                          // output : [ 1, 4, 9, 16, 25 ]


/*****************************************************************************************************************************************/


//3> filter :   it filter the array with a conditional function on each element and return a new array

// syntax :

var num1 = [1,2,3,4,5];
// suppose if i need numbers which are greater than 2
var num2 = num1.filter((e)=>{
    if (e>2){
        return true;
    }
    else{
        return false;
    }
});
console.log(num2);                                          // output : [ 3, 4, 5 ]


/*****************************************************************************************************************************************/


// 4> reduce :     it helps to reduce the array into a single value through a function

// syntax : 

var num1 = [1,2,3,4,5];
// suppose i need the sum of all the numbers inside the array 
var num2 = num1.reduce((a,b)=>{                             // ***********### please explain how this a,b is taken out from the array  ?
    return a+b;
});
console.log(num2);                                          // output : 15


/*****************************************************************************************************************************************/

//more to add







