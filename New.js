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


const chriz = Object.create(Humann)
chris.init('Chris', 'Coyier')

console.log(chriz.firstName)
console.log(chriz.lastName)


function Humman(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}



const chric = Humman('Chris', 'Coyier')

console.log(chric.firstName)
console.log(chric.lastName)




function Humman(firstName, lastName) {
    console.log(chric.firstName)
    console.log(chric.lastName)

}


Human.prototype.sayHello = function () {
    console.log(`'Hello, I'm ${firstName}`)
}




