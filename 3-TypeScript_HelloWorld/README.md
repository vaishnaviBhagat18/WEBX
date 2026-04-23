# 🧪 EXPERIMENT 3: TypeScript – Basic Programs
To write and execute basic TypeScript programs such as Hello World and simple operations.

What is TypeScript?
TypeScript is a superset of JavaScript that adds static typing.
Example:
let num:number = 10;

Why TypeScript?
Type safety
Better debugging
Scalable applications


⚙️ SOFTWARE USED
Fedora OS 🐧
Node.js
TypeScript compiler (tsc)


🔧 STEP-BY-STEP (TERMINAL METHOD)

✅ Step 1: Install Node.js
TypeScript runs on Node.js

sudo dnf install nodejs -y
node -v
npm -v

✅ Step 2: Install TypeScript
npm install -g typescript
tsc -v

tsc converts TypeScript → JavaScript

✅ Step 3: Create File
nano hello.ts

✅ Program 1: Hello World
console.log("Hello World");

▶️ Run:
nano hello.ts

Output:
Hello World

✅ Program 2: String Example
nano name.ts

let firstName:string="Vaishnavi";
let lastName:string="Bhagat";
let fullName:string=firstName+" "+lastName;
console.log(fullName);
console.log(`My Name is ${firstName} ${lastName}`);

▶️ Run:
tsc name.ts
node name.js

Output:
Vaishnavi Bhagat
My Name is Vaishnavi Bhagat

✅ Program 3: Multiplication Table
nano table.ts

let num:number=5;

for(let i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num * i}`);
}

▶️ Run:
tsc table.ts
node table.js

Output:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50


🧠Flow:
TypeScript (.ts) → Compiler (tsc) → JavaScript (.js) → Node runs it


📊 OUTPUT

The TypeScript programs were successfully compiled and executed.
Outputs for Hello World, string concatenation, and multiplication table were displayed correctly.


📚 THEORY

TypeScript is a strongly typed programming language that builds on JavaScript.
It requires compilation into JavaScript using the TypeScript compiler (tsc).
It improves code quality by detecting errors at compile time and supports modern programming features.


🎤 VIVA QUESTIONS

❓ Why TypeScript over JavaScript?
TypeScript provides type checking and better error detection.

❓ What is tsc?
It is the TypeScript compiler used to convert .ts files into .js.

❓ What is string interpolation?
Using ${} inside template literals.

❓ Difference let vs var?
let → block scoped
var → function scoped

❓ Can TypeScript run in browsers?
No, it must be compiled to JavaScript first.