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