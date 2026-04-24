# 🧪 EXPERIMENT: AJAX using JavaScript (XMLHttpRequest)
   
To fetch and display data dynamically from a server using AJAX.

🧠 CONCEPT
✔️ What is AJAX?
AJAX (Asynchronous JavaScript and XML) is used to fetch data from a server without reloading the webpage.

⚙️ SOFTWARE REQUIRED
Browser (Chrome / Firefox)
VS Code / Fedora editor
Running API server 


🔧 STEP-BY-STEP EXECUTION

✅ Step 1: Create File
index.html

✅ Step 2: Code

▶️ Step 3: Run
Open with live server index.html

code uses:
http://172.16.5.154:4000/api/getAll/

If server is NOT running:
You will get error:
Could not get data...

“This program uses AJAX to fetch data from a backend API. If the server is running, it will display results dynamically.”

✅ OUTPUT (WHEN SERVER WORKS)
As you type name:
Name: Rahul
Title: ...
Total: ...
Remark: ...
Count updates:
Total record(s) found: 3

[output](AJAXusingJavaScript.png)


🧠 CODE EXPLANATION 

🔹 1. XMLHttpRequest Object
var request = new XMLHttpRequest();

Used to send request to server

🔹 2. Getting Input
var n = (document.A.sn.value).toUpperCase();

Takes user input and converts to uppercase

🔹 3. Sending Request
request.open("GET", URL, true);

GET request to server

🔹 4. onreadystatechange
request.onreadystatechange = function() {

Runs when server response changes

🔹 5. Condition
if(this.readyState === 4 && this.status === 200)

Means:
request completed
response successful

🔹 6. Parsing JSON
var Sresponse = JSON.parse(this.responseText);

Converts JSON to JavaScript object

🔹 7. Loop Data
Sresponse.forEach(element => { ... });

Loops through results

🔹 8. Display Data
document.getElementById("result").innerHTML = str;

Shows result on page

🔹 9. Error Handling
else {
 document.getElementById("result").innerHTML="Could not get data..."
}

Handles server/network issues


📚 THEORY 

AJAX is a technique used to send and receive data from a server asynchronously without reloading the webpage.
In this experiment, XMLHttpRequest is used to fetch student data from a server and display it dynamically based on user input.


📊 OUTPUT

The program successfully fetched and displayed data dynamically using AJAX.
Results were updated automatically as the user typed input.

🎤 VIVA QUESTIONS (VERY IMPORTANT)
❓ What is AJAX?
It allows asynchronous data loading without page refresh.

❓ What is XMLHttpRequest?
It is an object used to send HTTP requests.

❓ What is readyState = 4?
Request completed

❓ What is status = 200?
Request successful

❓ Why JSON.parse?
To convert JSON into JavaScript object

❓ GET vs POST?
GET → fetch data
POST → send data

❓ What if server is down?
Error message shown: "Could not get data..."