/* 
syntax:

for (variable in object){
    code to be run
}

*/

let age = { // Indenting object key/values like this helps readability
    "harry": 24,
    "laura": 22,
    "robin": 35
}; // Don't forget to terminate with colon

for (e in age) {
    console.log(e); // Colon
}

/* 
output:

harry
laura
robin

here only the keys are assigned to the variable "e" in the loop from object "age". So , to get the keys also we have to do this
*/

for (e in age){
    console.log(e,"is",age[e],"years old"); // colon
    // You could also interpolate as a string
    console.log(e + " is " + age[e] + " years old");
}

// Or another way to do the same as above in one line
Object.keys(age).forEach(k => console.log(k + ' is ' + age[k] + ' years old'));

/*
output:

harry is 24 years old
laura is 22 years old
robin is 35 years old
*/

/* but in case we use array , string or any other iterable type object then the indexes are assigned to the variable e
*/

let list = ["d", "r", "i", "y", "o"]; // Colon - could also have values on separate lines to improve readability
for (e in list) {
    console.log(e);
}

/*

output:

0
1
2
3
4
*/

let name = "driyo"; // colon, spacing
for (e in name) {
    console.log(e); 
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
name = "driyo"; // colon, include let, as it defaults to var 
for (e of name){
    console.log(e);
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

let n = 0;            //start
while (n < 11) {
    console.log(n);
    n++;
    // Integer incrementing
//    n = n + 1;
//    n += 1;
    //    ++n,n++,--n,++n; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
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




