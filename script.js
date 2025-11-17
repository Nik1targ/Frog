const scrollButton = document.querySelector(".scroll-top");

scrollButton.addEventListener(
"click",
() => {
  window.scrollTo ({
    top:0,
    behavior: "smooth"
  })
  },
  false,
);


console.log('Привет мир');

let massage;
massage = 'Hello';
alert(massage);

let favoriteFood = "Пицца";

console.log('favorite food:', favoriteFood);

favoriteFood = "суши";

console.log('favorite food:', favoriteFood);

let age = 20;
age = 21;
console.log(age);

const birthday = "12 мая";
let myAge = 15;

console.log('birthday:', birthday, 'myAge:', myAge);

let $ = 1;
let _ = 2;

alert($ + _);

let n = 123;
n = 12.345;

alert(1/0); 
alert("не число" / 2);


let isSunny = true;
let isRaining = false;

if(isSunny){
  console.log("Moжно идти гулять!");
}

let box = null;
let anotherBox;

console.log(box, anotherBox);

let item = {
  title: "Книга",
  pages:200,
  avaible: true
};

console.log(item.title);


let colors = ["красный","зеленый","синий"];
console.log(colors[0]);

let text = "Привет";
console.log(typeof text);

let buttonPressed = false;

if(buttonPressed){
  console.log("Кнопка нажата!");  
}

let tempereture = 25;

if (tempereture > 20){
  console.log("Ты выйграл!");
}

if(isRaining) {
  console.log("Возьми зонт");
  console.log("И надень куртку");
}

let battery = 5;

if (battery < 10){
console.log("Нужно зарядить телефон");
} 
else {
  console.log("Батарея в порядке");
}

let isWeekend = false;

if(isWeekend === true) {
  console.log("Можно поспать подольше");
}

else {
  console.log("Надо в школу");
}



let grade = 8;

if(grade >= 9){
  console.log("Отлтчно");
}

else if(grade >= 7) {
  console.log("хорошо");
}

else if(grade >= 5) {
  console.log("удовлетворительно");
}

else  {
  console.log("нужно подтянуться");
}








let temp = 10

if(temp >= 30){
  console.log("Очень жарко");
}

else if(grade >= 20) {
  console.log("Тепло");
}

else if(grade >= 10) {
  console.log("Прохладно");
}

else  {
  console.log("Холодно");
}






let day = 3;
switch(day){
  case 1:
    console.log("Понедельник");
    break;
    case 2:
      console.log("Вторник");
    break;
    case 3:
      console.log("Среда");
    break;
    default:
    console.log("Другой день");
}


let color = "red";
switch(color){
  case "red":
    console.log("Крастный");
  case "green":
      console.log("зеленый");
    default:
    console.log("Другой");
}



let role = 5;
switch (role) {
  case 1:
      console.log("admine");
    break;
    case 2:
        console.log("user");

    break;
    case 3:
      
        console.log("guest");
    break;
    default:
    console.log("Другой");
}

let isOnline = true;
let status = isOnline ? "В сети" : "Не всети";
console.log(status);




let isReady = true;
let zakaz = isReady ? "готов" : "В зборке";
console.log(zakaz); 




for(let i=1; i<= 5; i++){
  console.log("Повтор" + i);
}



for(let i=2; i<= 10; i+=2){
  console.log(i)
}



for(let i=5; i<= 15; i+=1){
  console.log(i)
}


for(let i =5; i>=1; i--){
   console.log(i)
}
console.log("Старт");


// let i=1;

// while(i<=3){
//   console.log("Шаг" + i);
//   i++;
// }


let money =100;

while (money >0){
  console.log("Покупаю мороженое!");
  money -= 20;
}




let v=10;

while(v>=1){
  console.log(v);
  v--;
}


let password;

// do{
  // password = prompt("Введите пароль:");
// } while (password !=="1234");

// console.log("Пароль принят!");



// do{
  // f = prompt("Введите число:");
// } while (f !="5");


let fruits =["яблоко","банан","груша"];

for(let fruit of fruits){
  console.log(fruit);
}


for (let letter of "Привет") {
  console.log(letter);
}

let animals =["зебра","лев","жираф","кролик","куница","собака","медведь","носорог"];

for(let animal of animals){
  console.log(animal);
}


let person = {name:"Anna",age:15, city:"Минск"};

for (let key in person){
  console.log(key + ": " + person[key]);
}


let I = {name:"Nikita",age:15,city:"Minsk"};

for(let key in I){
  console.log(key + ": " + I[key]);
}



for (let i=1; i<=10; i++){
  if(i===5)break;
  console.log(i);
} 


for (let i=1; i<=5; i++){
  if(i===3) continue;
  console.log(i);
}



for (let i=1; i<=10; i++){
  if(i % 2===0) continue;
  console.log(i);
}



let sum = 0;

for(let i=1;i<=5; i++){
  sum += i;
}

console.log("Сумма:",sum);


for(let i=1;i<=10;i++){
  console.log(`3 x ${i} = ${3*i}`);
}


let word = "банан";
let count = 0;

for(let letter of word){
  if(letter === "a") count++;
}

console.log(`букв в слове ${word}:`,count);


let fruitWord = "Ананас";
let fruitWordCount = 0;

for( let letter of fruitWord.toLowerCase()){
  if (letter === "a") fruitWordCount++;
}

console.log(`Букв в слове ${fruitWord}:`,fruitWordCount);




function sym(a,b) {
  return a+b;
}

let result = sym(1,2);
alert(result);



const generateSumFinder = () => {
  const summ = (a,b) => a+b;
  return summ;

};

const summ = generateSumFinder();
summ(1,5);


const square = x => x*x;

console.log(square(5));


let resutl = square(4);
console.log(result);

const obj = {
  name:"Test",
  shox(){
    console.log(this.name);
  }
};

obj.shox();



function User(name){
  this.neme = name;
};

new User("Anna");



let name = "Nikolay";

function sayHi(){
  alert("Hi, " + name);
}
name = "Irina";
sayHi();



function makeCounter() {
  let count = 0;

  return function() {
    console.log(count);
  };
}
let counter = makeCounter();
counter();
counter();



function makeWorker(){
  let names = "Nikolay";

  return function(){

  };
}
let names = "Irina";
let work= makeWorker();
work();





