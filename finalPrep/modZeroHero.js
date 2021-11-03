// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Superman";
var specialAbility = "super strength";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "It's a bird.  It's a plane.  It's " + heroName + "!";
var catchphrase = `Superman is known for his ${specialAbility}.`;

// Declare two variables - power AND energy - set to integers

var power = 9001;
var energy = 100;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;


// Declare two variables - archEnemies AND sideKicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Lex Luther", "Brainiac", "Zod"];
var sideKicks = ["Super Dog", "Super Girl", "Lois Lane"];

// Print the first sidekick to your console

console.log(sideKicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[archEnemies.length - 1]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Darkseid");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// var dangerLevel = 101;
// var saveTheDay = "Never fear, I have saved the day!";
// var badExcuse = "I think I left the stove on...";

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <= 50 && dangerLevel >= 10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.")
  }
}

assessSituation(101, saveTheDay, badExcuse);

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.';
//assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Bizarro",
  smell: "gross",
  weight: 200,
  citiesDestroyed: ["Metropolis", "Gotham"],
  luckyNumbers: [13, 666],
  address: {
    number: 666,
    street: "Weird Walkway",
    state: "Anti-Delaware",
    zip: 66666,
  }
}




// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }

  sayName() {
    console.log(this.name);
  }

  maximizeEnergy(energyLevel) {
    this.energyLevel = 1000;
  }

  gainPower(powerLevel) {
    this.powerLevel = this.powerLevel + powerLevel
  }

}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

var theFlash = new SuperHero("The Flash", "super speed", 27);
var greenLantern = new SuperHero("Green Lantern", "courage", 28);

theFlash.sayName();
greenLantern.maximizeEnergy();
greenLantern.gainPower(15);

console.log(greenLantern);

// Reflection
// What parts were most difficult about this exerise?

// The most difficult part about this exercise was remembering all of the syntax and how each different term, like variable, class, object, etc., connect together.

// What parts felt most comfortable to you?

// I was most comfortable with all of the stuff prior to the class stuff.  I am still solidifying all of the definitions from section 4 and how all of the individual components  come together.

// What skills do you need to continue to practice before starting Mod 1?

// I definitely need to clarify my section 4 knowledge and practice it all some more before Mod 1.
