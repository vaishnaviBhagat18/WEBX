# 🧪 EXPERIMENT: Semantic Web using Apache Jena
To study Semantic Web using Apache Jena and perform SPARQL queries on RDF data.

✔️ What is Semantic Web?
Semantic Web is a technology where data is structured so that machines can understand it.

✔️ Key Terms:
RDF → Data format (subject–predicate–object)
SPARQL → Query language (like SQL)
Ontology → Data relationships

Example:
Student → hasName → "Vaishnavi"


⚙️ SOFTWARE USED
Fedora OS 🐧
Java (JDK 17)
Apache Jena


🔧 STEP-BY-STEP PROCEDURE

✅ Step 1: Install Java
Jena is a Java-based framework.

Update system packages
sudo dnf update -y
Install Java OpenJDK 17
sudo dnf install java-17-openjdk java-17-openjdk-devel -y
Verify Java installation
java -version

✅ Step 2: Download Apache Jena
Navigate to temporary directory
cd /tmp
Download Apache Jena 5.6.0
wget https://downloads.apache.org/jena/binaries/apache-jena-5.6.0.tar.gz
Extract the archive
tar -xzf apache-jena-5.6.0.tar.gz
Move to /opt directory
sudo mv apache-jena-5.6.0 /opt/jena
Set appropriate permissions
sudo chmod -R 755 /opt/jena

Installing Jena framework

✅ Step 3: Set Environment Variables
Add Jena to PATH
echo 'export JENA_HOME=/opt/jena' >> ~/.bashrc
echo 'export PATH=$PATH:$JENA_HOME/bin' >> ~/.bashrc
Reload bash configuration
source ~/.bashrc
Verify installation
sparql --version

✅ Step 4: Create RDF File
nano students.ttl
[students1.ttl](students1.ttl)

This file stores structured semantic data.

✅ Step 5: Run SPARQL Query

Example 1: Select All Students
This query retrieves all students with their details:

Query:
sparql --data=students.ttl --query=/dev/stdin << 'EOF'
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX ex: <http://example.org/>
SELECT ?name ?id ?age ?course
WHERE {
?student a foaf:Person ;
foaf:name ?name ;
ex:studentID ?id ;
foaf:age ?age ;
ex:course ?course .
}
ORDER BY ?name
EOF

Output: List of students
[eg1](eg1.png)


✅ Step 6: Filter Query
To retrieve specific data

Example 2: Filter Students by Course
This query filters students enrolled in Computer Engineering:

Query:
sparql --data=students.ttl --query=/dev/stdin << 'EOF'
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX ex: <http://example.org/>
SELECT ?name ?id ?age
WHERE {
?student foaf:name ?name ;
ex:studentID ?id ;
foaf:age ?age ;
ex:course "Computer Engineering" .
}
ORDER BY ?name
EOF

OUTPUT: Filtered students
[eg2](eg2.png)


✅ Step 7: Count Query
To analyze data

Example 3: Count Students by Course
This query aggregates and counts students grouped by their course:

Query:
sparql --data=students.ttl --query=/dev/stdin << 'EOF'
PREFIX ex: <http://example.org/>
SELECT ?course (COUNT(?student) as ?count)
WHERE {
?student ex:course ?course .
}
GROUP BY ?course
ORDER BY DESC(?count)
EOF

OUTPUT: Count of students per course
[eg3](eg3.png)


📊 OUTPUT

SPARQL queries successfully retrieved:
All student details
Filtered students by course
Count of students per course

📚 THEORY

Apache Jena is an open-source Java framework used for building Semantic Web applications.
It supports RDF data storage and SPARQL queries for retrieving structured information.
RDF represents data in the form of triples, while SPARQL is used to query this data efficiently.


🎤 VIVA QUESTIONS (IMPORTANT)
❓ What is RDF?
RDF is a data model that represents information as triples (subject, predicate, object).

❓ What is SPARQL?
SPARQL is a query language used to retrieve data from RDF.

❓ What is Apache Jena?
It is a framework used for Semantic Web and Linked Data applications.

❓ Difference SQL vs SPARQL?
SQL	SPARQL
Relational DB	RDF data
Tables	Graph structure

❓ What is Turtle format?
It is a readable format for writing RDF data.


Tools:
Apache TinkerPop → graph processing
RDFLib → RDF in Python
Protégé → ontology design