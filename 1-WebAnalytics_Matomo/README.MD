🧪 EXPERIMENT 1: Web Analytics using Matomo
To study web analytics using open-source tool Matomo and analyze website traffic.

Matomo = analytics tool (like Google Analytics)
Docker = runs software in containers (no manual install)
MariaDB = database to store analytics data

Website → Tracking Code → Matomo Server → Database → Dashboard

⚙️ SOFTWARE USED
Fedora OS 
Docker
Docker Compose
Web Browser


✅ Step 1: Install Docker
To run Matomo without manual setup.

Run:
sudo dnf install docker -y
sudo systemctl start docker
sudo systemctl enable docker

Check:
docker --version

✅ Step 2: Install Docker Compose
To run multiple containers (Matomo + Database)
Run:
sudo dnf install docker-compose -y
docker compose version

✅ Step 3: Create Project Folder
mkdir ~/matomo-docker
cd ~/matomo-docker

To store configuration files

✅ Step 4: Create docker-compose.yml
Defines services (Matomo + Database)
[docker-compose.yml](docker-compose.yml)

✅ Step 5: Start Matomo
docker compose up -d

Starts containers in background

Check:
docker ps

✅ Step 6: Open Matomo
Browser:
http://localhost:8080

Do setup:
Next → Next → Next
Create admin account
Add website

✅ Step 7: Get Tracking Code
This tracks user activity on your website.

✅ Step 8: Create Test Website
mkdir ~/matomo-test-site
cd ~/matomo-test-site

Create:
nano index.html
[index.html](index.html)

Create:
nano about.html
[about.html](about.html)

Create:
nano products.html
[products.html](products.html)

[website screenshot](matomo.png)

✅ Step 9: Run Website
python3 -m http.server 8000

Open:
http://localhost:8000

✅ Step 10: Generate Traffic
Click pages multiple times OR:

curl http://localhost:8000

✅ Step 11: Check Analytics
Open:
http://localhost:8080

Go to:
Visitors → Real-time
Behaviour → Pages

You’ll see:
Page views
Visitors
Time spent


📊 OUTPUT

Matomo dashboard displays:
Number of visitors
Page views
User navigation
Real-time analytics

📚 THEORY

Web analytics is the process of collecting and analyzing website data to understand user behavior.
Matomo is an open-source analytics tool that provides insights such as visitor count, page views, and traffic sources.
It uses tracking code embedded in websites to collect data and stores it in a database for visualization.


🎤 VIVA QUESTIONS (IMPORTANT)
❓ What is Web Analytics?

It is the process of analyzing website usage data.

❓ What is Matomo?

Matomo is an open-source web analytics tool used to track website visitors.

❓ Why use Docker?

Docker simplifies installation and runs applications in isolated containers.

❓ What is tracking code?

It is a JavaScript code used to collect user activity data.

❓ What data does Matomo collect?
Page views
Visitors
Time spent
Device info