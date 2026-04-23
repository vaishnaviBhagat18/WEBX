class Student {
    // Public property - accessible everywhere
    public name: string;
    // Private property - only within Student class
    private age: number;
    // Protected property - within Student and child classes
    protected address: string;

    // Constructor to initialize properties
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Public method to display student info
    public displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address}`);
    }

    // Public method to get age (since age is private)
    public getAge(): number {
        return this.age;
    }
    // Public method to set age
    public setAge(newAge: number): void {
        if (newAge > 0 && newAge < 120) {
            this.age = newAge;
        }
    }
}

// Create a student object
const student1 = new Student("Vaishnavi Bhagat", 20, "Mumbai, Maharashtra");

// Access public property directly
console.log(student1.name); // Works!

// Access private property directly
// console.log(student1.age); // ERROR! - age is private
// Access private property through public method
console.log(student1.getAge()); // Works!

// Update age using setter
student1.setAge(21);
console.log(student1.getAge()); // Output: 21


// Access protected property directly
// console.log(student1.address); // ERROR! - address is protected
// Call public method
student1.displayInfo(); // Works!


class TE_Student extends Student {
    // Own properties
    public semV_Percentage: number;
    public semVI_Percentage: number;
    public branch: string;
    private rollNumber: string;

    // Constructor
    constructor(
        name: string,
        age: number,
        address: string,
        semV: number,
        semVI: number,
        branch: string,
        rollNumber: string
    ) {
        // Call parent class constructor
        super(name, age, address);
        // Initialize own properties
        this.semV_Percentage = semV;
        this.semVI_Percentage = semVI;

        this.branch = branch;
        this.rollNumber = rollNumber;
    }

    // Method to calculate average percentage
    public calculateAverage(): number {
        return (this.semV_Percentage + this.semVI_Percentage) / 2;
    }

    // Method to check if student passed
    public hasPassed(): boolean {
        return this.semV_Percentage >= 40 && this.semVI_Percentage >= 40;
    }

    // Override parent method to display TE student info
    public displayInfo(): void {
        console.log("=== TE Student Information ===");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.getAge()}`);
        // Can access protected 'address' from parent class!
        console.log(`Address: ${this.address}`);
        console.log(`Roll Number: ${this.rollNumber}`);
        console.log(`Branch: ${this.branch}`);
        console.log(`Sem V: ${this.semV_Percentage}%`);
        console.log(`Sem VI: ${this.semVI_Percentage}%`);
        console.log(`Average: ${this.calculateAverage()}%`);
        console.log(`Status: ${this.hasPassed() ? "PASSED" : "FAILED"}`);
    }
}

// Create object
const teStudent1 = new TE_Student(
  "Vaishnavi Bhagat",
  20,
  "Mumbai, Maharashtra",
  78,
  82,
  "IT Engineering",
  "TE-IT-09"
);

// Display output
teStudent1.displayInfo();
