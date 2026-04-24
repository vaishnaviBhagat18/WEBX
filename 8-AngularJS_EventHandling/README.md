# 🧪 EXPERIMENT: AngularJS Event Handling
To implement event handling in AngularJS using directives like ng-click and functions.

🧠 CONCEPT 
✔️ What is Event Handling?
It is the process of responding to user actions like button click, input, etc.

✔️ AngularJS Event Directives:
Directive	Use
ng-click	Button click
ng-change	Input change
ng-mouseover	Mouse hover
ng-keyup	Keyboard input


⚙️ SOFTWARE REQUIRED
VS Code / Fedora editor
Browser
AngularJS CDN


🔧 STEP-BY-STEP PROCEDURE

✅ Step 1: Create File
index.html

✅ Step 2: Write Code
[index.html](./index.html)

▶️ Step 3: Run
open with live server - index.html


✅ OUTPUT
✔️ When button clicked:
Button Clicked!
✔️ When typing:
Enter Name: Vaishnavi
Output: Hello Vaishnavi
[output](eventhandling.png)

Updates instantly

🧠 Flow
User action → Angular directive → function runs → scope updates → UI updates


📚 THEORY 

AngularJS provides event directives such as ng-click and ng-change to handle user interactions.
These events call functions defined in the controller, which update the model and automatically reflect changes in the view.


📊 OUTPUT 

The application successfully handled user events like button click and input change.
The output was dynamically updated using AngularJS data binding.


🎤 VIVA QUESTIONS 

❓ What is ng-click?
It executes a function when a button is clicked.

❓ What is ng-change?
It triggers when input value changes.

❓ How AngularJS handles events?
Using directives connected to controller functions.

❓ What is $scope?
It is an object that connects controller and view.

❓ Difference ng-model vs ng-click?
ng-model → binds data
ng-click → handles event