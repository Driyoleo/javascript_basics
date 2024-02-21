/*

ways of declaration:
1. var
2. let
3. const

*/
  


// 1> var:
 
// synatax:

var a = 1;
var a = 1 , b = 2;


// var defines variables wiht a global scope even if it is defining a variable inside a block :

{
    var a = 0;
}
console.log(a);

// output :  0

// we can define same variable multiple times through var :

var a = 0;
var a = 24;

// no error

// ---------------------------------------------------------------------------------------------------------------------------

// 1> let:

//synatax:

let a = 1;
let c = 1 , b = 2;

// let define variables at local scope :

let num = 0;
{
    let num = 4;
    console.log(num)        // output: 4
}
console.log(num)            // output: 0 

// num value outside the block remained same cause inside the block num is of local scope and different from the num which is defined in the global scope

// let cannot define same variable more than one time:

let num2 = 0;
// let num2 = 1;  it will give error but
num2 = 1;         // is correct cause after defining a variable we can use it as our need


// ---------------------------------------------------------------------------------------------------------------------------

// 2> const :

// syntax:

const num3 = 0;

//const define variable with a constant value of local variable :

{
    const num4 = 3;
    // num4 = 0             error: cause it cannot be changed further 
}
// console.log(num4)        error: cause num4 has local scope and limited to it's block only


// --------------------------------------------------------------------------------------------------------------------------

/****** doubt *****/

// if I do :

var v1 , v2 , v3 , v4 = (1,2,3,4);

// here 
//     v1 undefined
//     v2 undefined 
//     v3 undefined
//     v4 44

//     why only the last variable is assigned with 44 ?


// also :

var p1 , p2 , p3 = "abc";

// here 
//     p1 undefined
//     p2 undefined
//     p3 "abc"

//     why... ?





