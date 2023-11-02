#getting location of all drivers
import requests
from flask import Flask,render_template,request
import requests

url=requests.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAv4qIVV1uSlRhIxWZMg1_LzyJNnIDP2Pw')

temp = url.json()["results"][0]['formatted_address']
app=Flask(__name__,template_folder='template')

@app.route('/',methods=['GET','POST'])
def start():
	final_formula=temp
	return render_template("test.html",fnf=final_formula)
    

if __name__=='__main__':
    app.run(debug=True)
