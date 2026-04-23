// Advanced Calculator in TypeScript

// nano adv_calc.ts

import * as readline from 'readline';
// install readline using npm install @types/node --save-dev


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    console.log("Addition: " + (num1 + num2));
    console.log("Subtraction: " + (num1 - num2));
    console.log("Multiplication: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));

    rl.close();
  });
});


// tsc adv_calc.ts
// node adv_calc.js

// Output (example)

// Enter first number: 12   
// Enter second number: 8
// Addition: 20
// Subtraction: 4
// Multiplication: 96
// Division: 1.5