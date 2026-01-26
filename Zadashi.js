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




const promise = new Promise((resolve, reject) => {
    resolve("Готово");
});


promise.then(result => {
    console.log(result);
});


promise.catch(error => {
    console.log(error);
});


async function loadData() {
  try{
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  } catch (error) {
    console.log(error);
  }
}


const promisse = new Promise((resolve, reject) => {
    resolve("10");
});
promisse.then(res => res*2)
.then(res => res+5)
.then(data => console.log(res))



fetch("https:jsonplaceholder.typicode.com/users")
.then((res) => res.then())
.then((users) => {
    users.forEach((users) => console.log(user.name));
})
.catch((err) => console.log("ошибка",err));




fetch("https:jsonplaceholder.typicode.com/users")
.then((res) => res.then())
.then((users) => {
    users.forEach((users) => console.log(user.name));
})
.catch((err) => console.log("ошибка",err));
