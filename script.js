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

