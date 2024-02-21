/*
 types of loop:
 
 1. for loop

 syntax:
 for (statement1 ; statement2 ; statement3){
     code to be run
 }

 // Don't forget to end lines with smei colons - this isn't a requirement for javascript but it is good practice!
 
*/

for (let a = 0; a <= 10; a++) {
    console.log(a);
}

/*
output:

0
1
2
3
4
5
6
7
8
9
10

notice :

statement 1 is not essential to be the start of a loop but it can be any valid statement which must be run before the start of the loop

we can ommit the first statement in the for loop and place before as it is much more readable
*/

let a = 0;
console.log('starting loop');
for (; a <6; a++){
    console.log(a)
}

/*
output:

printing numbers from 1 to 5
0
1
2
3
4
5

but if you give any other statement except any conditional statement in  statement 2 place then the loop will not run but it will not show any error

The loop will run it is just that console.log('asdasd') returns the value of undefined, which equates to false, if you put a statement in place then it will run whilst that statement is true, when it false it will then stop.

i.e. for (a = 0; a < 1; ++a) // will run one time until the statement is evaluated as false
i.e. for (a = 0; a < 2; ++a) // will run two times until the statement is evaluated as false
i.e. for (console.log("this is start") ; console.log("this is end") ; a++) // will run 0 times because the statement is evaluated as false on the first iteration
i.e. for (a = 10 ; a < 5 ; a++) // will run 0 times because the statement is evaluated as false on the first iteration

*/

a = 0;
for (console.log("this is start"); console.log("this is end"); a++){
    console.log("this is will not be printed");
}

/*
output:

this is start
this is end
*/