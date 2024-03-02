/*********DOM accessing***********/

/*******************************************************************************************************/

// 1> tagname :    it is used to read tag name , but it is only applicable for Element node 

console.log(document.body.firstElementChild.tagName);

// output :
// DIV


/*******************************************************************************************************/


// 2> nodename :    it is used read node name  and it is applicable to all nodes

console.log(document.body.firstChild);

// output :
// #text "\n    "


/*******************************************************************************************************/


// 3> innerHTML : it returns the innerHTML of any element given 

console.log(document.body.innerHTML);

// output :

/* 
<div class="container">
<p>searching the DOM</p>
<div class="box" id="redb"></div>
<div class="box" id="blueb"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</div>
<script src="script.js"></script>
*/


/*******************************************************************************************************/


// 4> outerHTML :  it returns the innerHTML plus the Element itself 

console.log(console.log(document.body.outerHTML));

// output :
/*
<body>
<div class="container">
        <p>searching the DOM</p>
        <div class="box" id="redb"></div>
        <div class="box" id="blueb"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        </div>
    <script src="script.js"></script></body>
    */
   

/*******************************************************************************************************/


// 5> textContent : it returns all the text nodes inside a element 


console.log(document.body.textContent);
console.log(document.querySelector('p').textContent);

// output :
/*


searching the DOM                               // the remaining spaces are due to the other textnodes inside textcontent





        

*/
/*
searching the DOM                                       // <p> element doesn't contains any other text node
*/


/*******************************************************************************************************/


// 6> hidden :     it's hide the element in the page

document.body.firstElementChild.hidden = true

// output:
// --- the element is no more visible on the page




