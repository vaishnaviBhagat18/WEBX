# 🧪 EXPERIMENT: Student Record Application using AngularJS
To create a Student Record Management application using AngularJS and display passed and failed students.

🧠 CONCEPT 
This program demonstrates:
ng-repeat → loop through data
filters (logic) → pass/fail separation
expressions {{ }} → display data
AngularJS controller → manage data


⚙️ SOFTWARE REQUIRED
VS Code / Fedora editor
Web Browser
AngularJS CDN


🔧 STEP-BY-STEP EXECUTION

✅ Step 1: Create File
index.html

✅ Step 2: Paste Your Code
[index.html](./index.html)

▶️ Step 3: Run
Open with live server - index.html

✅ OUTPUT

✔️ Failed Students Table
Students with total marks < 8

✔️ Passed Students Table
Students with total marks ≥ 8

✔️ Statistics Section
Total Students: 10
Passed Students: X
Failed Students: Y

[output](studentrecord.png)


🧠 CODE EXPLANATION 
🔹 1. ng-app
<body ng-app="myApp">
Initializes AngularJS app

🔹 2. ng-controller
ng-controller="myController"
Connects HTML with JavaScript logic

🔹 3. Student Data
$scope.students = [ ... ]
Stores all student records

🔹 4. Filtering Logic
$scope.failedStudents = $scope.students.filter(s => s.mcq + s.nmcq < 8);
$scope.passedStudents = $scope.students.filter(s => s.mcq + s.nmcq >= 8);

Separates students based on total marks

🔹 5. ng-repeat
<tr ng-repeat="s in failedStudents">
Loops through array and prints rows

🔹 6. Expression
{{s.mcq + s.nmcq}}
Calculates total marks dynamically


📚 THEORY 

AngularJS is a JavaScript framework used to develop dynamic web applications.
In this experiment, student records are stored in an array and displayed using ng-repeat.
Filtering is used to separate passed and failed students based on their marks.
Expressions are used to calculate and display total marks dynamically.


📊 OUTPUT 

The application successfully displayed student records and categorized them into passed and failed students using AngularJS.
Statistics such as total students, passed students, and failed students were also displayed.


🎤 VIVA QUESTIONS 

❓ What is ng-repeat?
It is used to loop through arrays.

❓ How did you separate passed/failed students?
Using JavaScript filter function.

❓ What is $scope?
It connects controller and view.

❓ What is expression?
{{ }} used to display dynamic data.

❓ Why AngularJS?
For dynamic and real-time UI updates.