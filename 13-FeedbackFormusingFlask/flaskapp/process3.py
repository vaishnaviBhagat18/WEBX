from flask import *

app = Flask(__name__)

@app.route("/")
def Form():
    return render_template("customer.html")

@app.route("/process3", methods=['GET','POST'])
def display():
    if request.method == "POST":
        alldata = request.form
        return render_template("result.html", result=alldata)

if __name__ == '__main__':
    app.run(debug=True)