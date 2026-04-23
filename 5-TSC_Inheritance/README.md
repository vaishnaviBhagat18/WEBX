🧪 EXPERIMENT: Inheritance in TypeScript
To implement inheritance in TypeScript using classes, access modifiers, and methods.

🧠 CONCEPT (VERY IMPORTANT FOR VIVA)
✔️ What is Inheritance?
Inheritance is a feature where one class (child) acquires properties and methods of another class (parent).

eg: A TE_Student class can inherit from a Student class.
Single Level Inheritance
Student → TE_Student

✔️ Access Modifiers:
Modifier	Access
public	Anywhere
private	Only inside class
protected	Class + child class


⚙️ SOFTWARE REQUIRED
Fedora 🐧
Node.js
TypeScript (tsc)


🔧 STEP-BY-STEP EXECUTION

✅ Step 1: Create File
nano ClassInheritance.ts
[ClassInheritance.ts](ClassInheritance.ts)

▶️ Step 2: Compile
tsc ClassInheritance.ts
▶️ Step 3: Run
node ClassInheritance.js

✅ OUTPUT



🧠 CODE EXPLANATION

🔹 Parent Class: Student
Contains:
name → public
age → private
address → protected

Demonstrates access control

🔹 Getter & Setter
getAge()
setAge()

Private variables cannot be accessed directly → use methods

🔹 Child Class: TE_Student
class TE_Student extends Student

To inherit properties of Student

🔹 super()
super(name, age, address);

Calls parent constructor

🔹 Methods Added:
getTotalMarks()
calculateAverage()
hasPassed()

Shows:
Reusability
Logic building

🔹 Method Overriding
displayInfo()

Child class overrides parent method


📊 OUTPUT

The program successfully demonstrated inheritance in TypeScript.
The child class accessed properties and methods of the parent class and displayed student details along with calculated results.

📚 THEORY

Inheritance is an object-oriented programming concept where a class inherits properties and methods from another class.
TypeScript supports inheritance using the extends keyword.
Access modifiers such as public, private, and protected control the visibility of class members.
This improves code reusability and maintainability.


🎤 VIVA QUESTIONS (VERY IMPORTANT)

❓ What is inheritance?
It is a mechanism where one class inherits properties of another.

❓ What is extends?
It is used to inherit a class.

❓ What is super()?
It calls the parent class constructor.

❓ Difference: private vs protected?
private → only inside class
protected → accessible in child class

❓ Can child access private variable?
No, only through getter/setter.

❓ What is method overriding?
Redefining a method in child class.