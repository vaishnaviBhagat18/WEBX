# 🧪 EXPERIMENT: Feedback Form using Flask

To design a feedback form using Flask and display submitted data dynamically.

🧠 CONCEPT 

Flask → Python web framework
HTML Form → takes user input
POST method → sends data to server
Jinja2 → displays data dynamically


⚙️ SOFTWARE REQUIRED
Fedora OS / Windows
Python 3
Flask
Browser


🔧 STEP-BY-STEP EXECUTION

✅ Step 1: Install Flask

pip install flask

✅ Step 2: Create Project Structure

mkdir flaskapp

cd flaskapp

mkdir templates

👉 Final structure:

flaskapp/
 ├── process3.py
 └── templates/
     ├── customer.html
     └── result.html

✅ Step 3: Create Python File

nano process3.py

✔️ Code

✅ Step 4: Create HTML Files

nano templates/customer.html

nano templates/result.html

▶️ Step 5: Run Application

python3 process3.py

🌐 Step 6: Open in Browser

http://127.0.0.1:5000/

✅ OUTPUT
✔️ Step 1:
Form displayed

✔️ Step 2:
User fills form → clicks submit

✔️ Step 3:
Thanks for registration
UserName : Vaishnavi
Email : abc@gmail.com
...

[Output Screenshot](flaskapp.png)

🧠 Flow
User fills form → POST request → Flask receives data → passes to template → displays output


📚 THEORY

Flask is a lightweight Python web framework used to develop web applications.
In this experiment, an HTML form collects user input and sends it to the Flask server using POST method.
The data is processed and displayed dynamically using Jinja2 templates.


📊 OUTPUT 

The feedback form successfully collected user input and displayed it dynamically using Flask.


🎤 VIVA QUESTIONS

❓ What is Flask?
A lightweight Python web framework.

❓ What is render_template?
Used to display HTML pages.

❓ What is request.form?
Used to get form data.

❓ GET vs POST?
GET → data in URL
POST → data in body

❓ Why templates folder?
Flask automatically looks there for HTML files.