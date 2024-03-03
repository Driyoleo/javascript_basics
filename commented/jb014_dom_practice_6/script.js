
/*********attribute methods*********/


/*******************************************************************************************************/

// 1> hasAttribute :   it's check the existance of a particular attribute in a element

console.log(document.querySelector('div.box').hasAttribute('id'));

// output :
// true                     // it will return false if not present

/*******************************************************************************************************/

// 2> getAttribute :       it returns the value of the attribute given 

console.log(document.querySelector('div.box').getAttribute('id'));

// output :
// redb

// note : if the attribute is not present there then it returns null

console.log(document.querySelector('div.box').getAttribute('style'));

//output :
// null

/*******************************************************************************************************/

// 3> setAttribute :       it take ('attribute name ' , 'value')  to add or change the existing attribute

const cont = document.querySelector('div.container');
console.log(cont.firstElementChild.getAttribute('class'));                  // output : null ... cause it there is no class attribute present 
cont.firstElementChild.setAttribute('class','newbox');
console.log(cont.firstElementChild.getAttribute('class'));                  // output : newbox


/*******************************************************************************************************/

// 4> .removeAttribute : it remove the attribute if present inside a element

// const cont = document.querySelector('div.container');

console.log(cont.firstElementChild.hasAttribute('class'));                  // output : true 
cont.firstElementChild.removeAttribute('class');                            // if the atttribute is not present in it then nothing will happen
console.log(cont.firstElementChild.hasAttribute('class'));                  // output : false 


/*******************************************************************************************************/

// 5> attributes :  it returns collection of all the attributes inside a element 

// const cont = document.querySelector('div.container');
console.log(document.querySelector('.box').attributes);

//output :
// NamedNodeMap [ class="box", id="redb" ]

/*******************************************************************************************************/
// we will learn about insertion methods in dom next....










