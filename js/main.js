// Exercise #  1
// 

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function FavoriteFoods(Object) {
    for (let i = 0; i < Object.length; i++) {
        console.log(`Favorite foods are ${this.burgers[i]}`)
    }  
} 
FavoriteFoods(person3) 


//=======Exercise #2=========//


// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (years = 1) => {
        this.age += years;
    }
}

person1 = new Person('Patrick', 31)
person2 = new Person('Dalton', 28)
person1.printInfo()
person2.printInfo()
 
person2.addAge()
person2.addAge()
person2.addAge()
person2.printInfo()

