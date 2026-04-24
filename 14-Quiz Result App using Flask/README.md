# 🧪 EXPERIMENT: Quiz Result App using Flask

To design a Quiz Result Application using Flask and fetch data dynamically from an API.

🧠 CONCEPT 

Flask → backend framework
HTML Form → user input
API → fetch student quiz data
requests module → call API
Jinja2 → display results


⚙️ SOFTWARE REQUIRED
Python 3
Flask
requests library
Browser


🔧 STEP-BY-STEP EXECUTION


✅ Step 1: Install Required Packages

pip install flask requests

✅ Step 2: Create Project Structure

mkdir quizapp

cd quizapp

mkdir templates

📁 Structure
quizapp/
 ├── quiz.py
 └── templates/
     ├── home.html
     └── home1.html
     
✅ Step 3: Create Python File

nano quiz.py

✅ Step 4: Create HTML Files

✔️ home.html (Input Form)

nano templates/home.html

✔️ home1.html (Display Result)

nano templates/home1.html

▶️ Step 5: Run Application

python3 quiz.py

🌐 Step 6: Open Browser

http://127.0.0.1:5000


✅ OUTPUT

✔️ Step 1:
Form displayed:
Enter Student Name: _______

✔️ Step 2:
Enter name → Submit

✔️ Step 3:
Name: Rahul
Title: Java Quiz
Total: 8
Remark: Pass


Your API:
http://172.16.5.154:4000

👉 If NOT working:

“This application fetches data from external API. If API is active, it will display results dynamically.”


🧠 CODE EXPLANATION

🔹 request.form
stname = request.form.get('sname')
👉 Gets user input

🔹 API Call
response = requests.get(url)
👉 Sends request to server

🔹 JSON Data
data = response.json()
👉 Converts API response into Python object

🔹 render_template
return render_template('home1.html', data=data)
👉 Sends data to HTML

🔹 Jinja Loop
{% for student in data %}
👉 Displays multiple records


📚 THEORY 

Flask is used to create web applications and integrate external APIs.
In this experiment, user input is sent to the Flask server, which fetches data from an API and displays the results dynamically using templates.


📊 OUTPUT 

The application successfully fetched quiz results using an API and displayed them dynamically using Flask.


🎤 VIVA QUESTIONS

❓ What is Flask?
Python web framework

❓ What is requests module?
Used to call APIs

❓ What is API?
Interface to fetch/send data

❓ What is JSON?
Data format used in APIs

❓ What is Jinja2?
Template engine in Flask
