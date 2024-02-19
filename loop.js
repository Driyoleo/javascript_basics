/*
 types of loop:
 
 1. for loop

 syntax:
 for (statement1 ; statement2 ; statement3){
     code to be run
 }
 
*/

for (let a=0 ; a<=10 ; a++){
    console.log(a)
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

*/

/* notice :

statement 1 is not essential to be the start of a loop but it can be any valid statement which must be run before the start of the loop

*/

a=0
for (console.log("printing numbers from 1 to 5") ; a<6 ; a++){
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

*/

/* but if you give any other statement except any conditional statement in  statement 2 place then the loop will not run but it will not show any error
*/

a=0
for (console.log("this is start") ; console.log("this is end") ; a++){
    console.log("this is will not be printed")
}

/*
output:

this is start
this is end

*/

