// String
str="I am Muhammad Hamza. I am studying at University of Agriculture Faisalabad.";
console.log(str.length);
str1="I am from Chichwtni"
console.log(str+str1);
console.log(str1.indexOf("f"))
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.includes("am"));
console.log(str1.replace("am","AM"));
console.log(str1.reverse());
for(let index in str1){
    console.log(index,str[index]);
}
console.log(str.slice(1,2));    

// Number
// Qoutient& Remainder
function Qoutient(a,b){
    return a/b
}
console.log(Qoutient(4,4));
// Remainder
function Remainder(a,b){
    return a%b
}
console.log(Remainder(4,4));
// Add
function add(a,b){
    return a+b
}
console.log(add(4,4));
// Subtract
function subtract(a,b){
    return a-b
}
console.log(subtract(4,4));
// Product
function product(a,b){
    return a*b
}
console.log(product(4,4));
console.log(Math.ceil(40.2));
console.log(Math.random()*1);
console.log(Math.max(40,2));
console.log(Math.min(40,2));
console.log(Math.sqrt(36));
console.log(Math.pow(4,2));
let p1=1e6;
console.log(p1);


// Date
let d=new Date();
// current date by day
console.log(d.getDate());
// Current date and time from date object
console.log(d);
// current year
console.log(d.getFullYear());
// current month
console.log(d.getMonth());
// Add in current date(by day)
console.log(d.getDate()+2);
// Subtract in current date(by day)
console.log(d.getDate()-2);
// time in milliseconds
console.log(d.getMilliseconds());
const d2= new Date();
console.log(d2-d1);



// For Loop
for(let i=1; i<=10;i++){
    console.log(i);
};
array=["Ali","Hamza","Shoaib Jutt"]
for(index in array){
    console.log(index,array[index]);
}
z=0;
for(let i=0; i<=10;i++){
    z=z+(i);
    console.log(z);
}
for(let i=1; i<=10;i++){
    z=2*i;
    console.log("2","*",i,"=",z);
}
sum=0
for(i=2;i<=100;i+=2){
    sum=sum+(i)
    console.log(sum);
}


// While Loop
var n=parseInt(prompt("Enter a Value","0"));
var i=-1;
while(i<n){
    i+=2;
    console.log(i);
    if(i==9){
        break;
    }
}
let n= +prompt("Enter a number");
let i=0;
while(i<=10){
i++;
console.log(n,"*",i,"=",n*i);
}
    // }
//     else(console.log('hello'))

//     z=2*i;
//     console.log("2","*",i,"=",z);
// }
let input =prompt("Input Your Guess");
let guess="Hamza"//console.log(Math.random()*100);
while(input!==guess){
    input =prompt("Input again Your Guess");
    if(input===guess){
    alert("Right Guess");
    break;}
}


// Add two numbers 

let x = parseInt("enter first number");
let y = parseInt("enter second number");
let sum = x + y;
