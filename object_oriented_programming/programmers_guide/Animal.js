// inheritance
// parent class
class Animal {
    // instance
    constructor(name, age, price) {
        // attributes
        this.name = name;
        this.age = age;
        this.price = price;
    }

    // methods
    CheckStock() {
        return 10;
    }

    AnyMethod() {
        console.log('This method belongs to the parent class!');
    }
}

// applying inheritance
// the dog class inherits the characteristics of the animal class
// child class
class Dog extends Animal {
    // instance using the attributes of the parent class
    constructor(name, age, price, breed, color, weight) {
        // attributes from parent class
        super(name, age, price);
        // attributes from child class
        this.breed = breed;
        this.color = color;
        this.weight = weight;
    }

    Bark() {
        console.log('The dog is barking... RULF! RULF!');
    }

    AnyMethod() {
        console.log('Here is a dog class!');
        // super makes reference to the parent class and print the same message from there
        super.AnyMethod();
        console.log('Here, there are more functionalities!');
    }
}

let dog = new Dog('Frodo', 5, 10000, 'Fila', 'caramel', 14);

console.log(dog.CheckStock());
dog.Bark();
dog.AnyMethod();
console.log(dog.age);
console.log(dog.color);
