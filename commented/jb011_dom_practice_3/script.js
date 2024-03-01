/****************  searching the DOM *************/
const body = document.body;
console.log(body)

/**************************************************************************************************************************/

// 1> getElementsByClassName : through this we can access all the elements with class given class name 

// syntax :

const container = body.getElementsByClassName('container');
console.log(container);                                  // here it will return a html collection object with all the elements wiht class name 'container' inside body 

// output :
// HTMLCollection [div.container]

/**************************************************************************************************************************/

// 2> getElementById :     it returns the element with id given as argument.


// const red_box = container[0].getElementById('redb');                 // why I can't use body or container to get the element by id?
// const red_box = body.getElementById('redb');
const red_box = document.getElementById('redb');
console.log(red_box);

// output :
// <div id="redb" class="box">

/**************************************************************************************************************************/

// 3> querySelectorAll :  return a nodelist of all the Elements with same query

// syntax : 

const boxes = document.querySelectorAll('div.box');
console.log(boxes);

// output :
// NodeList(5) [ div#redb.box, div#blueb.box, div.box, div.box, div.box ]

/**************************************************************************************************************************/

// note : -div.box means div with class = 'box'
//        -div#box means div with Id = 'box'

/**************************************************************************************************************************/

// 4> querySelector : it select the first element with given query and return it.

const blue_box = document.querySelector('div#blueb');
console.log(blue_box);

// output :
// <div id="blueb" class="box">


/**************************************************************************************************************************/

// note : a liable mistake can be done that those selector which returns node list can't be directly used with other properties but selector which return a particular element you can use further properties.

// 'boxes' is a node list so
// boxes.style.backgroundColor = 'blue'; .... is not correct cause it's not an element

// 'blue_box' is an element so
blue_box.style.backgroundColor = 'blue';        // is correct..

/**************************************************************************************************************************/

// 5> getElementsByTagName :       it returns a HTML collection with all the Elements with same tag name 

const div = document.getElementsByTagName('div');
console.log(div);

// output :
// HTMLCollection { 0: div.container, 1: div#redb.box, 2: div#blueb.box, 3: div.box, 4: div.box, 5: div.box, length: 6, … }

/**************************************************************************************************************************/


/**************************************************************************************************************************/

// doubt  : 
// 1>is there any difference between HTML collection and node list.....?
// 2> (mentioned in section 3)..

















