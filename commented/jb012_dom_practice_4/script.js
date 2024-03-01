/***********searching in the dom part-2************/

const cont = document.body.querySelector('.container');

// 1> matches : it check the css property is persent inside the element or not  and return answer in boolean form

console.log(cont.firstElementChild.matches('#blueb'));

// output :
// false


// 2> closest :     The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector. if not found returns null


console.log(cont.firstElementChild.closest('.container'));

// output :
// <div class="container">


// 3> contains :     it check it contains the element or itself that element and return value in true or false 

console.log(cont.contains(document.querySelector('#blueb')));


// output :
// true






