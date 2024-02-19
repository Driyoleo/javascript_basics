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

*/

/* notice :

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

*/

/* but if you give any other statement except any conditional statement in  statement 2 place then the loop will not run but it will not show any error

The loop will run it is just that console.log('asdasd') returns the value of undefined, which equates to false, if you put a statement in place then it will run whilst that statement is true, when it false it will then stop.

i.e. for (a = 0; a < 1; ++a) // will run one time until the statement is evaluated as false
i.e. for (a = 0; a < 2; ++a) // will run two times until the statement is evaluated as false
i.e. for (console.log("this is start") ; console.log("this is end") ; a++) // will run 0 times because the statement is evaluated as false on the first iteration
i.e. for (a = 10 ; a < 5 ; a++) // will run 0 times because the statement is evaluated as false on the first iteration

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

// 2. for in loop

/* 
syntax:

for (e in object){
    code to be run
}

*/

let age= {"harry":24 , "laura":22 , "robin":35}
for (e in age){
    console.log(e)
}

/* 
output:

harry
laura
robin

here only the keys are assigned to the variable "e" in the loop from object "age". So , to get the keys also we have to do this
*/

for (e in age){
    console.log(e,"is",age[e],"years old")
}
/*
output:

harry is 24 years old
laura is 22 years old
robin is 35 years old
*/

/* but in case we use array , string or any other iterable type object then the indexes are assigned to the variable e
*/

let list=["d","r","i","y","o"]
for (e in list){
    console.log(e)
}

/*

output:

0
1
2
3
4
*/

let name="driyo"
for (e in name){
    console.log(e)
}

/* 
output:
0
1
2
3
4
*/

// 3.for of loop

/* 
syntax:

for (<variable> of <iterable object>){
    code to be run
}

note:
it is only applicable for iterable objects like arrays , strings etc otherwise it will clearly show error
*/

name="driyo"
for (e of name){
    console.log(e)
}

/*
output:

d
r
i
y
o

*/

// 4. while loop

/* 
syntax:

while (condition){
    code to be run
}

here the start of the loop and the step has to be given manualy
*/

let n=0            //start
while (n<11){
    console.log(n)
    n++            //steps
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

// 5.do-while loop

/* 
syntax:

do{

}
while (condition){
    code to be run
}

similar to while loop .. just due to "do" the code inside do{} will be executed always once before the while loop
*/




