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
    
}


const chris = new Human('Chris', 'Coyier')
console.log(chris.firstName);console.log(chris.lastName)

const zell = new Human('Zell', 'Liew')
console.log(zell.firstName);console.log(zell.lastName)




const Human = {
    init(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}


const chriz = Object.create(Human)
chris.init('Chris', 'Coyier')

console.log(chriz.firstName)
console.log(chriz.lastName)


function Human(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}



const chric = Human('Chris', 'Coyier')

console.log(chric.firstName)
console.log(chric.lastName)



