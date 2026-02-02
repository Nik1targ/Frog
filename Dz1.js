
/*let x = 10;
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

*/






class Lamp {
    turnOn() {
        console.log("Lamp is on");
    }
}


const lampLight = new Lamp();
lampLight.turnOn();


class User {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        console.log(`Hello, I am ${this.name}`);
    }
}

const user1 = new User("Alice");
user1.sayHello();


class Counter {
    #count = 0; 
    
    increment() {
        this.#count++;
    }
    
    getValue() {
        return this.#count;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log("Counter value:", counter.getValue());


class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}


class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}


class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}


new Dog().speak();
new Cat().speak();


class Shape {
    draw() {
        
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing Circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing Square");
    }
}

const circle = new Circle();
const square = new Square();
circle.draw();
square.draw();


class Button {
    click() {
        console.log("Button clicked");
    }
}

class SaveButton extends Button {
    click() {
        console.log("Saving...");
    }
}

class DeleteButton extends Button {
    click() {
        console.log("Deleting...");
    }
}


new SaveButton().click();
new DeleteButton().click();


const buttons = [
    new SaveButton(),
    new DeleteButton()
];

buttons.forEach(button => button.click());


class Account {
    constructor(balance = 0) {
        this.balance = balance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            return amount;
        } else {
            console.log("Insufficient funds");
            return 0;
        }
    }
    
    getBalance() {
        return this.balance;
    }
}

class AdminAccount extends Account {
    resetBalance() {
        this.balance = 0;
        console.log("Balance reset to 0");
    }
}


