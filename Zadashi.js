let text = "Javascript";
console.log(text.lenght);


let city = "london";
console.log(city.toLocaleUpperCase);


let fruit = ["apple", "banana", "orange"];
console.log(fruits.length);



calcDiscount(7500,15);
console.log(calcDiscount);



function normalizeLogin(Login) {
    const resultLogin = login.toLowerCase().trim();

    return resultLogin;
}

const testlogin =" LOGINTEST";
const login =" MYLOGIN";

let normaLogin = normalizeLogin(testlogin);
let normalizeLogin = normalizeLogin(login);

console.log("Normalize login", normLogin);
console.log("Normalize second login", normalizeLoginTest);




const filterLongWords = (words, minLenght) => {
    return words.filter((word) => word.lenght >= minLenght);
};

const animals = ["cat", "parrot","dog", "elephant"];
const min = 4;

filterLongWords(animals, min);