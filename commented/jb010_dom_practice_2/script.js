// 1> childNodes : it gives child nodes of that element

// syntax :

console.log(document.body.childNodes)
// output :
// NodeList(4) [text, div.container, text, script]

// note : there are three types of nodes .. 
// 1> text Node
// 2> element Node
// 3> Comment node


// 2> firstchild node :

// syntax :

console.log(document.body.firstChild)

// output :
// #text


// 3> firstelemntchild :

// syntax :

console.log(document.body.firstElementChild)

// output :
// <div class="container">


// 4> lastelementchild :

// syntax :

console.log(document.body.firstElementChild.lastElementChild)

// output :
// <div class="box">


// 5> nextElementSibling :

// syntax :

console.log(document.body.firstElementChild.firstElementChild.nextElementSibling)

// output :
// <div class="box">


// 6> previousElementSibling  :

// syntax :

console.log(document.body.firstElementChild.firstElementChild.previousElementSibling)

// output :
// null


// 7> parentElement :

// syntax :

console.log(document.body.firstElementChild.firstElementChild.parentElement)

// output :
// <div class="container">