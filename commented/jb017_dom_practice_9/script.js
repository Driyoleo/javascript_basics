/************callback and promises************/

// callbacks :  when we call another function which defined through another function 

// example :

function lion(){
    console.log('roar');
};


function animal(name , sound){              // here sound is a callback function
    console.log(name);
    sound()
};

animal('lion', lion);

/********************************************************************************************************/


// promises :    it is a set of code which promise to be execute which may resolved or rejected

// syntax :

// const pr = new Promise((resolve,reject)=>{
//     // code     
// });


// example :    i have two numbers i want to take their square of their sum if the sum of two number's sum is even

var num1 = parseInt(Math.random() * 10);
var num2 = parseInt(Math.random() * 10);

const pr = new Promise((resolve , reject)=>{
    sum = num1+num2 ; 
    sum % 2 == 0 ? resolve(sum) : reject('the sum is not even');            // if it is rejected it return err with the given message
})
pr.then((sum)=>{
    console.log(sum**2 + ` is the sq of sum of ${num1} and ${num2}`);        // then runs when the promise is resolved
}).catch((err)=>{       
    console.log(err);                                                       // catch runs when the promise is rejected and prevent to raise err 
});








