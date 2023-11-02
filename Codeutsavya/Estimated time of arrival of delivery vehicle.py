from flask import Flask,render_template,request
import mysql.connector
import requests



app=Flask(__name__,template_folder='template')
url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"
api_key = 'AIzaSyAv4qIVV1uSlRhIxWZMg1_LzyJNnIDP2Pw'

@app.route('/',methods=['GET','POST'])
def start():
    if request.method=='POST':
        home=request.form['star']
        work=request.form['dest']
        r = requests.get(url + "origins=" + home + "&destinations=" + work + "&key=" + api_key) 
        return render_template("test.html",time=r)
    else:
        return render_template("infro.html")


if __name__=='__main__':
    app.run(debug=True)