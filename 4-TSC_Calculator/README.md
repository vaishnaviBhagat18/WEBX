# 🧪 EXPERIMENT: Calculator using TypeScript
To design and implement a simple calculator using TypeScript.

A calculator performs:
Addition
Subtraction
Multiplication
Division

In TypeScript:
Use number type
Use functions / operators

⚙️ SOFTWARE REQUIRED
Fedora OS 🐧
Node.js
TypeScript (tsc)


🔧 STEP-BY-STEP PROCEDURE

✅ Step 1: Install Node & TypeScript (if not done)
sudo dnf install nodejs -y
npm install -g typescript

Check:
node -v
tsc -v

✅ Step 2: Create Calculator File
nano calculator.ts
[calculator.ts](calculator.ts)

✅ Program Code (Simple Calculator)
let num1:number = 10;
let num2:number = 5;

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));

▶️ Step 3: Compile and Run
tsc calculator.ts
node calculator.js

✅ Output
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2


🧠 Flow
TypeScript (.ts) → tsc compiler → JavaScript (.js) → Node executes


💡 OPTIONAL (Better Calculator – Input Based)
[advanced_calculator](adv_calc.ts)
Shows you know user input handling


📊 OUTPUT

The calculator program successfully performed arithmetic operations such as addition, subtraction, multiplication, and division using TypeScript.


📚 THEORY

A calculator is a program used to perform arithmetic operations.
In TypeScript, variables are declared with types such as number.
The TypeScript compiler (tsc) converts the code into JavaScript, which is then executed using Node.js.


🎤 VIVA QUESTIONS
❓ Why use TypeScript for calculator?
It ensures type safety and reduces errors.

❓ What is number type?
It is used to store numeric values.

❓ Why compile TypeScript?
Because it cannot run directly in the browser/Node.js and must be converted to JavaScript.

❓ What is Node.js used for?
To execute JavaScript outside the browser.

