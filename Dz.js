
let x = 10;
let y = 5;
console.log(x + y); 


let name = "JS";
console.log("I love " + name); 


let price = 100;
let discount = 20;
let finalPrice = price - (price * discount / 100);
console.log(finalPrice);


let isOnline = true;
console.log(isOnline); 

let n = 7;
console.log(n * 2); 


let message = "";



let numbers = [1, 2, 3];
console.log(numbers.length); 


let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); 


let arr = [1, 2, 3];
arr.push(10);
console.log(arr); 


let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2); 


let nums = [5, 10, 15];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}


let sumArray = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < sumArray.length; i++) {
    total += sumArray[i];
}
console.log(total); 


let numbersArray = [3, 7, 2, 9, 1];
let min = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] < min) {
        min = numbersArray[i];
    }
}
console.log(min); 


let original = [1, 2, 3, 4];
let doubled = [];
for (let i = 0; i < original.length; i++) {
    doubled.push(original[i] * 2);
}
console.log(doubled); 


let checkArray = [1, 3, 5, 7, 9];
let hasFive = false;
for (let i = 0; i < checkArray.length; i++) {
    if (checkArray[i] === 5) {
        hasFive = true;
        break;
    }
}
console.log(hasFive); 




for (let i = 1; i <= 5; i++) {
    console.log(i);
}


for (let i = 5; i >= 1; i--) {
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum); 


for (let i = 0; i < 3; i++) {
    console.log("Hello");
}


let text = "JS";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}




function sayHi() {
    console.log("Hi!");
}
sayHi();


function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3)); 


function square(n) {
    return n * n;
}
console.log(square(4)); 


function greet(name) {
    console.log("Hello, " + name);
}
greet("Pingvin");


function isPositive(number) {
    return number > 0;
}
console.log(isPositive(5)); 
console.log(isPositive(-3)); 


function getHundred() {
    return 100;
}
console.log(getHundred()); 





const person = {
    name: "Анна",
    age: 25
};
console.log(person.name); 
console.log(person.age);  



person.city = "Москва";
console.log(person.city); 


delete person.age;
console.log(person); 


const car = {
    brand: "Kawasaki",
    model: "H2R",
    year: 2024
};

for (let key in car) {
    console.log(key); 
}



for (let key in car) {
    console.log(car[key]); 
}


