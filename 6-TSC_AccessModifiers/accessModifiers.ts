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

console.log(p.name);      // public 
// console.log(p.age);   // ERROR 
// console.log(p.city);  // ERROR 

console.log(p.getAge());  //  via method
p.display();

let e = new Employee("Rahul", 25, "Mumbai");
e.showDetails();


// Step 2: Compile
// tsc accessModifiers.ts
// Step 3: Run
// node accessModifiers.js

// OUTPUT
// Vaishnavi
// 20
// Name: Vaishnavi
// Age: 20
// City: Pune
// Name: Rahul
// City: Mumbai
