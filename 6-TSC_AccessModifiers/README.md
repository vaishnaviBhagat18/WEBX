# 🧪 EXPERIMENT: Access Modifiers in TypeScript
To demonstrate the use of access modifiers (public, private, protected) in TypeScript.

✔️ What are Access Modifiers?
They control the visibility and accessibility of class members.

✔️ Types:
Modifier	Access
public	Accessible everywhere
private	Only inside the class
protected	Inside class + child class


⚙️ SOFTWARE REQUIRED
Fedora OS 🐧
Node.js
TypeScript


🔧 STEP-BY-STEP EXECUTION

✅ Step 1: Create File
nano access.ts
[access.ts](access.ts)

✅ Program Code
class Person {
    public name: string;
    private age: number;
    protected city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    public display(): void {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("City: " + this.city);
    }

    public getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    showDetails(): void {
        console.log("Name: " + this.name);   // public
        console.log("City: " + this.city);   // protected
        // console.log(this.age); // ERROR (private)
    }
}

let p = new Person("Vaishnavi", 20, "Pune");

console.log(p.name);      // public ✔️
// console.log(p.age);   // ERROR ❌
// console.log(p.city);  // ERROR ❌

console.log(p.getAge());  // ✔️ via method
p.display();

let e = new Employee("Rahul", 25, "Mumbai");
e.showDetails();
▶️ Step 2: Compile
tsc access.ts
▶️ Step 3: Run
node access.js
✅ OUTPUT
Vaishnavi
20
Name: Vaishnavi
Age: 20
City: Pune
Name: Rahul
City: Mumbai
🧠 EXPLANATION (VERY IMPORTANT)
🔹 public
public name

✔️ Can access:

inside class
outside class
child class
🔹 private
private age

❌ Cannot access outside class
✔️ Only via method (getAge())

🔹 protected
protected city

✔️ Accessible:

inside class
inside child class

❌ Not outside class

📊 OUTPUT (WRITE IN JOURNAL)

The program demonstrated the use of access modifiers.
Public members were accessible everywhere, private members were accessed using methods, and protected members were accessed in the derived class.

📚 THEORY (WRITE THIS)

Access modifiers in TypeScript define the visibility of class members.
Public members are accessible everywhere, private members are restricted to the class, and protected members are accessible within the class and its subclasses.

🎤 VIVA QUESTIONS
❓ What are access modifiers?

They control accessibility of variables and methods.

❓ Difference private vs protected?
private → only inside class
protected → also accessible in child class
❓ Why use private?

To protect data from direct access.

❓ How to access private variable?

Using getter/setter methods.

❓ Default access modifier?

public

⚠️ COMMON ERRORS
❌ Accessing private directly
❌ Confusing protected with public
💡 SHORTCUT (EXAM)

If time is less:

Run program
Show:
public works
private error
protected works in child

👉 Explain → done ✔️

🔥 PRO TIP

Say this line:

“Encapsulation is achieved using access modifiers.”