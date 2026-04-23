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
nano accessModifiers.ts
[accessModifiers.ts](accessModifiers.ts)

✅ Program Code


🧠 EXPLANATION 

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


📊 OUTPUT 

The program demonstrated the use of access modifiers.
Public members were accessible everywhere, private members were accessed using methods, and protected members were accessed in the derived class.


📚 THEORY

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

“Encapsulation is achieved using access modifiers.”