When an application grows larger it becomes hard to maintain and difficult to find error in code. So, there are 4 pillars of OOP that makes it easy to build. Inheritance, Polymorphism, Abstraction, Encapsulation. With help of this developer can build large scale application with ease and maintainability.

//Inheritance: 
With the help of inheritance, we can create new class that is based on existing class. It allows us to use properties and methods of existing from its parent class. For example, we can create a class 'Animal' with properties like 'name' and 'age' and methods like 'eat' and 'sleep'. Then we can create a new class 'Dog' that inherits from 'Animal' and adds its own properties like 'breed' and methods like 'bark'.
class Animal {
    name: string;   
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
  eat() {
    console.log("Eating...");
  }
  sleep(){
    console.log("Sleeping...");
  }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
  bark() {
    console.log("Woof!");
  }
}

//polymorphism:
Polymorphism is the ability of an object to take on many forms. It allows us to use a single interface to represent different types of objects. It aloows us to write code that can work with objects of different classes as long as they share a common interface. For example, we can create an interface 'Shape' with a method 'area' and then create classes 'Circle' and 'Rectangle' that implement the 'Shape' interface. We can then write code that can work for both 'Circle' and 'Rectangle' objects using the 'Shape' interface.
interface Shape {
    area(): number;
}       
class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }   
}
class Rectangle implements Shape {
    width: number;
    height: number;


    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;   

    }
    area(): number {
        return this.width * this.height;
    }
}

//Abstraction:

Abstraction is the process of hiding the implementation details and showing only the essential features of an object. It allows us to focus on what an object does rather than how it does it. For example, we can create an abstract class 'Vehicle' with an abstract method 'move' and then create classes 'Car' and 'Bike' that extend the 'Vehicle' class and provide their own implementation of the 'move' method.
abstract class Vehicle {
    abstract move(): void;
}   
class Car extends Vehicle {
    move(): void {
        console.log("Car is moving...");
    }
}
class Bike extends Vehicle {
    move(): void {
        console.log("Bike is moving...");
    }
}   
N.B: we can also use interface instead of abstract class for abstraction. It depends on the use case and design of the application. Then we have to use implements instead of extends to implement the interface.

interface  Vehicle {
     move(): void;
}   
class Car implements Vehicle {
    move(): void {
        console.log("Car is moving...");
    }
}
class Bike implements Vehicle {
    move(): void {
        console.log("Bike is moving...");
    }
}  

//Encapsulation:
Encapsulation is used to protect is data and methods from outside interference. It allows us to control access to the internal state of an object and prevent unauthorized access or modification. For example, we can create a class 'BankAccount' with private properties like 'balance' and public methods like 'deposit' and 'withdraw' to interact with the balance without directly accessing it. This way, we can ensure that the balance is always updated correctly and prevent any unauthorized access to it.
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}
Without encapsulation, any part of the application could modify balance directly:
account.balance = -5000;
