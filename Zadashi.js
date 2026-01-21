let text = "Javascript";
console.log(text.lenght);


let city = "london";
console.log(city.toLocaleUpperCase);


let fruit = ["apple", "banana", "orange"];
console.log(fruits.length);



calcDiscount(7500,15);
console.log(calcDiscount);



function normalizeLogins(Login) {
    const resultLogin = login.toLowerCase().trim();

    return resultLogin;
}

const testlogin =" LOGINTEST";
const login =" MYLOGIN";

let normaLogin = normalizeLogins(testlogin);
let normalizeLogin = normalizeLogins(login);

console.log("Normalize login", normLogin);
console.log("Normalize second login", normalizeLoginTest);




const filterLongWords = (words, minLenght) => {
    return words.filter((word) => word.lenght >= minLenght);
};

const animals = ["cat", "parrot","dog", "elephant"];
const min = 4;

filterLongWords(animals, min);


const users = [
    { name: "Глеб", age: 15 },
    { name: "Никита ", age: 16 },
    { name: "Влад", age: 15 }
  ];
  
  const formatter = (u) => `${u.name} (${u.age})`;
  
  const result = formatUsers(users, formatter);

  //const formatUsers = (users, formatter) => {
    //return users.map(user => formatter(user)
 // }
  
  console.log(result);



function isEmpty(arr) {
    if(arr == null || ! Array.isArray(arr)) {
        return true;

    }
    return arr.length === 0;
}


const isEmail = (email) => {
    return email.includes("@")
}





