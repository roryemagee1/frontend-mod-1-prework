/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// // Prompt 1: Dog
//
// class Dog {
//   constructor() {
//     this.breed = "Labrador";
//     this.age = 9;
//   }
// }
//
// var animals = new Dog();
// console.log(animals);
//
// // Prompt 2: Snack
//
// class Snack {
//   constructor() {
//     this.snack = "Snickers";
//     this.calories = 300;
//   }
// }
//
// var foods = new Snack();
// console.log(foods);
//
// // Prompt 3: Shirt
//
// class Shirt {
//   constructor {
//     this.type = "Tee Shirt";
//     this.color = "Red";
//   }
// }
//
// var clothes = new Shirt();
// console.log(clothes);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

  // Prompt 1: Dog

// class Dog {
//   constructor(dogBreed, dogAge, dogName) {
//     this.breed = dogBreed;
//     this.age = dogAge;
//     this.name = dogName;
//   }
// }
//
// var animals = new Dog("Australian Shepherd", 9, "Rocky");
// console.log(animals);
//
// // Prompt 2: Snack
//
// class Snack {
//   constructor(candy, kcal, flavor) {
//     this.snack = candy;
//     this.calories = kcal;
//     this.type = flavor;
//   }
// }
//
// var foods = new Snack("Snickers", 300, "Caramel");
// console.log(foods);
//
// // Prompt 3: Shirt
//
// class Shirt {
//   constructor(shirtType, shirtColor, shirtSize) {
//     this.type = shirtType;
//     this.color = shirtColor;
//     this.size = shirtSize;
//   }
// }
//
// var clothes = new Shirt("Tee shirt", "Red", "L");
// console.log(clothes);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

class Dog {
  constructor(dogBreed, dogAge, dogName) {
    this.breed = dogBreed;
    this.age = dogAge;
    this.name = dogName;
  }
}

var aussie = new Dog("Australian Shepherd", 9, "Rocky");
console.log(aussie);

var labrador = new Dog("Labrador", 17, "Jakey");
console.log(labrador);

// Prompt 2: Snack

class Snack {
  constructor(candy, kcal, flavor) {
    this.snack = candy;
    this.calories = kcal;
    this.type = flavor;
  }
}

var snickers = new Snack("Snickers", 300, "Caramel");
console.log(snickers);

var butterfingers = new Snack("Butterfingers", 350, "Peanut butter")
console.log(butterfingers);

// Prompt 3: Shirt

class Shirt {
  constructor(shirtType, shirtColor, shirtSize) {
    this.type = shirtType;
    this.color = shirtColor;
    this.size = shirtSize;
  }
}

var tshirt = new Shirt("Tee shirt", "Red", "L");
console.log(tshirt);

var sweatshirt = new Shirt("Sweat shirt", "Maroon", "M");
console.log(sweatshirt);
