class Animal {
    speak() {
        console.log("Animal sound");
    }
}


class Cat extends Animal {
    apeak () {
        console.log("Meow");
    }
}



const cat = new Cat();
cat.speak();



function Human(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    

    this.sayHallo = function () {
        console.log(`'Hello, I'm ${firstName}`)
    
    }
}


const chris = new Human('Chris', 'Coyier')
console.log(chris.firstName);console.log(chris.lastName)

const zell = new Human('Zell', 'Liew')
console.log(zell.firstName);console.log(zell.lastName)




const Humann = {
    init(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}


// const chriz = Object.create(Humann)
// chris.init('Chris', 'Coyier')

// console.log(chriz.firstName)
// console.log(chriz.lastName)


// function Humman(firstName, lastName) {
//     return {
//         firstName,
//         lastName
//     }
// }



// const chric = Humman('Chris', 'Coyier')

// console.log(chric.firstName)
// console.log(chric.lastName)




// function Humman(firstName, lastName) {
//     console.log(chric.firstName)
//     console.log(chric.lastName)

// }


// Human.prototype.sayHello = function () {
//     console.log(`'Hello, I'm ${firstName}`)
// }




//1
const symm = (x,y) => x+y;
const resSymm = symm(10,5);
console.log('resSymm', resSymm);



//2
const namez = {
  Js: "I love JS",
  showName() {
      console.log(this.Js);
  }
};


//3

const symmz = (x,y) => x-y;
console.log(symmz(100,20));





//4
const IsOnline = {
  IsOnline: "true",
  showName() {
      console.log(this.IsOnline);
  }
};



//5
const symma = (x,y) => x*y;
console.log(symma(7,2));




//6
const messagec = {
  messagec: " ",
  showName(){
    console.log(this.messagec);
  }
}



//22
function sayHi(){
    let mes = "Hi";
  
    return console.log("Hi:", mes);
  }
  sayHi();


  //27
  function return100() {
    return 100;
  }
console.log("return 100", return100());



