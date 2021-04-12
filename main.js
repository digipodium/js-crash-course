

// variable declaration
let username; 
//  intializing
username = 'Prashu Gupta'               
// setting the variable to a tag content
document.querySelector('b').textContent = username

let age = 20;                       
let isMarried = false;
let otherInfo = ['national pg college','BVoc.','Final year']
let btn = document.querySelector('button')

// Operators
// addition
let ans = 6 + 10;
let bigword = 'Hello ' + "world of JS"
// substraction, mul, div
9 - 3;
10 * 10;
10 / 2;
ans === 16;
ans !== 15;

// condition
let iceCream = 'chocolate';
if (iceCream === 'chocolate'){
    alert('Yay, i love chocolate icecream');
}else{
    alert('Awww, but chocolate is my favorite');
}

// functions
function multiply(a,b){
    let result = a * b
    return result
}

console.log(multiply(10,10))
console.log(multiply(12,5))

// events -> real time interaction
document.querySelector('.btn2').onclick = function(){
    alert('Stop poking me!!!')
}

// heading changer
document.querySelector('.btn1').onclick = function(){
    document.querySelector('h1').textContent = bigword
}

