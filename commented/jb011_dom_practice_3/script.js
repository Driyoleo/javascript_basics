/****************  searching the DOM *************/
const body = document.body;
console.log(body)


// 1> getElementsByClassName : through this we can access all the elements with class given class name 

// syntax :

const container =body.getElementsByClassName('container');
console.log(container);                                  // here it will return a html collection object with all the elements wiht class name 'container' inside body 

// output :
// HTMLCollection [div.container]


// 2> getElementById :     it returns the element with id given as argument.


// const red_box = container[0].getElementById('redb');                 // why i can't use body or container to get the element by id?
// const red_box = body.getElementById('redb');
const red_box = document.getElementById('redb');
console.log(red_box);

// output :
// <div id="redb" class="box">

// to be continued












