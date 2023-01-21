console.log('JavaScript is running!');

/* longer JS block comment 
- const is a type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid CSS selector to make a connection to ANY elment on the page - it works the same way as CSS selectors do, because it's USING css selectors to find matching element(s).

the document is the DOM - the web page and all of its elements

querySelector is the method (function) that makes the connection between JS and the DOM (the elements)
*/

// step 1 - make the connection to the element(s) you want to interact with
const icon1 = document.querySelector('#icons1')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

// step 2 - decide how you want the user to interact with the obect you created in step 1
icons1.addEventListener('click', logThisId);

const icon2 = document.querySelector('#icons2')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons2.addEventListener('click', logThisId);

const icon3= document.querySelector('#icons3')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons3.addEventListener('click', logThisId);

const icon4 = document.querySelector('#icons4')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons4.addEventListener('click', logThisId);

const icon5 = document.querySelector('#icons5')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons5.addEventListener('click', logThisId);

const icon6 = document.querySelector('#icons6')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons6.addEventListener('click', logThisId);

const icon7 = document.querySelector('#icons7')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons7.addEventListener('click', logThisId);

const icon8 = document.querySelector('#icons8')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons8.addEventListener('click', logThisId);

const icon9 = document.querySelector('#icons9')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons9.addEventListener('click', logThisId);

const icon10 = document.querySelector('#icons10')
function logThisId() {
    console.log('clicked on this element:', this.id);
}

icons10.addEventListener('click', logThisId);
