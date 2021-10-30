// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { // This function, titled buildABear, takes in the following variables as parameters.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; // This greeting variable combines the name parameter with an interpolated string to make a custom message.
  var demographics = [name, age]; // This variable takes the paramter of name and age and saves them as an array.
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // This variable creates a new string by combining the parameter of specialPower with other strings using concatenation.
  var builtBear = { // This variable saves the builtBear object with the following keys on the next line.  Each key brings together the previous variables and the following information to creat a bear profile
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

  return builtBear // This line of code returns the builtBear object as an output.  The object itself will output as a built bear profile.
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); // This line of code executes the buildABear function with all of the following information as a parameters.  The final output will fill in all of the parameters into the builtbear function, thus creating a customized profile with those paramters.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); // This line of code works the same way as the last one, but with different parameters.



//FizzBuzz <== I believe this is a grade school game played using the direct naming of multiples of numbers as an elimination criteria?
function fizzBuzz(num1, num2, range) { // This function, titled fizzBuzz, takes two numbers and a range as inputs.  The function itself finds the multiples of num1 and num2 over a given range and replaces them with strings and if the number is a multiple of neither number, it outpusts the number, itself.  If the i number is a multiple of num1 and num2, "fizzbuzz" will be outputted.  If the i number is a multiple of just num1, just "fizz" will be outputted, and if the i number is a multiple of just num2, just "buzz" will be outputted.  Finally, if the number if neither i is neither a multiple of num1 nor a multiple of num2, the number itself will be outputted.
  for (var i = 0; i <= range; i++) { // This is a for loop that defines variable i as its counter.  So long as i is below the specified range paramter, the function will continue to loop so long as it evaluates as true.  Eventually i will exceed the range, and the loop will evaulate as false.  Every time the if sequence below goes through a cycle, the i++ incrementor will add a 1 to the i variable counter, thus getting it closer to being outside of the predefined range.
    if (i % num1 === 0 && i % num2 === 0) { // This is an if statement imbedded into the for loop.  It checks whether both the first argument and the second argument are true.  The && operator completes the aforementioned check.  In the first argument, the percent symbol tells the computer to find the remainder of i/num1 and then the computer checks if it aboslutely equals 0, meaning 1 is divisible by num1.  The second argument does the same thing, but checks it for i/num2.
      console.log('fizzbuzz'); // If both of the && arguments evaluate to true, the if statement evaluates to true, and the console logs the string "fizzBuss".  If one or both arguments evaluate to false, the loop moves onto the next if else statement.
    } else if (i % num1 === 0) { // This if else statement checks whether the remainder of i/num1 is absolutely equal to 0, meaning i is divisible by num1.
      console.log('fizz'); // If i is divisible by num1, the previous if else statement evaluates as true, and the console outputs the string "fizz".
    } else if (i % num2 === 0) { // This if else statement checks whether the remainder of i/num2 is absolutely equal to 0, meaning i is divisible by num2.
      console.log('buzz'); // If i is divisible by num2, the previous if else statement evaluates as true, and the console outputs the string "buzz".
    } else { // If the previous if else statement evaluates as false, the loop moves onto the else statement, which logs the variable i as it is currently defined.
      console.log(i); // Each time the program evaulates the if or if else or else statements as true or false, the program cycles back to the beginning, and continues until the for loop evaluates as false.
    }
  }
}

fizzBuzz(3, 5, 100); // This will execute the function with the following parameters for num1 and num2 over the give range.
fizzBuzz(5, 8, 400); // This will execute the function with the following parameters for num1 and num2 over the given range as well.
