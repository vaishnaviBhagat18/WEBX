from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/getData', methods=['POST'])
def getData():
    stname = request.form.get('sname')

    # API call
    url = f"http://172.16.5.154:4000/api/getAll/{stname}"
    response = requests.get(url)
    data = response.json()

    return render_template('home1.html', data=data)

if __name__ == "__main__":
    app.run(port=5000, debug=True)


# from flask import Flask,render_template,request,json,jsonify
# import os,requests

# app = Flask(__name__)
 
# @app.route('/', methods =['GET'])
# def home():


# 	return  render_template('home.html')


 
# @app.route('/getData', methods =['POST'])
# def getCity():
# 	stname = request.form.get('sname')
# 	url = f"http://172.16.5.154:4000/api/getAll/{stname}"
# 	responsess = requests.get(url)
# 	data = responsess.json()

# 	return  render_template('home1.html',data=data)


# if __name__ == "__main__":
# 	app.run(port = 5000,debug=False)
