/******************looping through arrays******************/


// 1> forEach loop :

// syntax :

var num = [1, 2, 3, 4, 5];
num.forEach((element, index, arr) => { // no capitalisation for variables
    console.log(element, index, arr)
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
    // This is a simpler way of the above
//    return e > 2;
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

// we can do some debugging to find out what is going on
var num1 = [10,20,30,40,50];
var num2 = num1.reduce((accumulator,value)=>{
    console.log(accumulator, value);
    return accumulator+value;
});

//10 20
//30 30
//60 40
//100 50

// we can also set an accumulator initial value
var num1 = [10,20,30,40,50];
var num2 = num1.reduce((accumulator,value)=>{
    console.log(accumulator, value);
    return accumulator+value;
}, 100);

//100 10
//110 20
//130 30
//160 40
//200 50

/*
By seeing what happens when the accumulator is not set we can see the reducer function ran one less time (it has 4 rows of output vs 5)
Therefore, we can deduce that:

- if no accumulator is set, then set the accumulator to the 0th index of the array, and then iterate from the second index
-- the accumulator value for the next loop is what is returned from the previous function call
-- output below with notes

// 10 20 - accumuator set from num1[0], value is num1[2] we return (num1[0] + num1[1] = 30
// 30 30 - accumulator set from last return 30 - value = num1[2] - we return 30 + 30 = 60
// 60 40 - etc
// 100 50 - etc

- if an initial accumulator value is given, start looping at the 0th index
-- the accumulator value for the next loop is what is returned from the previous function call

//100 10 - accumuator set from initial 100, value is num1[0] we return (100 + num1[0] = 110
//110 20 - etc
//130 30 - etc
//160 40 - etc
//200 50 - etc
/*


/*****************************************************************************************************************************************/

//more to add







