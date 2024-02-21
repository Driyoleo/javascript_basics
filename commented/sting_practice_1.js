

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
 





