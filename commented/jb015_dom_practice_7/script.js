/*********Insertion methods**********/

// we should know how to create an html element in javascript 

const div = document.createElement('div');

// then we can add some class and id to it

div.className = 'box green inserted';               // here 'box' 'green' 'insereted' are three different class added to the element
// div.id = 'insert_1'                                 // here we have added id 'insert_1;' 
// .... now commenting out this , to avoide errors during inserting it multiple times to explain different methods of insertion

// now we can add some html inside the the element 

div.innerHTML = `<span> INSERTED </span>`               // it will be a good practice to use backticks


// now we can see different insertion methods :



// 1> .append() :      it insert at the end of the node;

const div1 = div.cloneNode(true);                           // it helps to clone whole element,this is important as to create many different elements
document.querySelector('.container').append(div1);

// output :            you will get to see a green box at the end in the website



// 2> .prepend() :     it insert at the beginning of the node

const div2 = div.cloneNode(true);
div2.className = 'box red inserted';                 // changing the class for different color
document.querySelector('.container').prepend(div2);

// output :            you will get to see a red box at the beginning



// 3> .after :          it insert after the node ends 

const div3 = div.cloneNode(true);
div3.className = 'box blue inserted';                
document.querySelector('#b3').after(div3);

// output :            you will get to see a blue box after box 3



// 4> .before() :          it insert before the node starts 

const div4 = div.cloneNode(true);
div4.className = 'box yellow inserted';                
document.querySelector('#b3').before(div4);

// output :             you will get to see a yellow box before box 3



// 5> .replacewith() :          it replaces the node with the given element

const div5 = div.cloneNode(true);
div5.className = 'box purple inserted';                
document.querySelector('#b4').replaceWith(div5);

// output :             you will get to see a purple box in place of box 4














