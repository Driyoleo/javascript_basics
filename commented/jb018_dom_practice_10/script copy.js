/********** try , catch and finally ************/

// note : javascript is a very forgiving language so it throw very less error but :
//         - we avoid to show errors to the user (for this we use try , catch and finally statements)
//         - also sometimes we need to throw manual errors to test some results of code ( for this we use throw statement)



// try , catch and finally :

// example : here we need to take two numbers from user and show there Sum 

var a = prompt('enter 1st number :');
var b = prompt('enter 2nd number :');

try {
    if (isNaN(parseInt(a)) && isNaN(parseInt(b))){              
        throw SyntaxError('invalid input');     //here we need to thorw error cause parseInt return NaN value if the given argument is not a number
    }else{
        var sum = a + b;
        console.log(a+b);
    ;}
}catch (err){                                   // catch statement catch the error and prevent to be shown to the user
    console.log(err);               
}


// note finally is very specially used to run code in functions  ... exapmle :

var sum = (a,b)=>{
    try {
        if (isNaN(parseInt(a)) && isNaN(parseInt(b))){              
            throw SyntaxError('invalid input');   
        }else{
            var sum = a + b;
            return a+b;
        };
    }catch (err){                                
        return err;                             // after return statement no code run below so if there is any important thing to do
    }finally {
        console.log('all the files are closed and connection from dbms is dicontinued');            // we do thorw finally cause if we just write after the return statement then it will be ignored by javascript
    };
}


