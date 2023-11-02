from flask import Flask,render_template,request
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"
api_key = 'AIzaSyAv4qIVV1uSlRhIxWZMg1_LzyJNnIDP2Pw'

home = input("Enter a home address\n") 

distance_matrix=[]

app=Flask(__name__,template_folder='template')

@app.route('/',methods=['GET','POST'])
def start():

    total=request.form['all_queried_of_warehouse_with_certain_products']
    lst=list(total.split(" "))
    
    
    for i in range(len(lst)):
        r = requests.get(url + "origins=" + home + "&destinations=" + lst[i] + "&key=" + api_key) 
        temp = r.json()["rows"][0]["elements"][0]["distance"]["text"]       
        distance_matrix.append(temp)
    small=min(distance_matrix)
    
    for i in range(len(distance_matrix)):
        if small==distance_matrix[i]:
            wh=lst[i]
            break
    print( wh +'this is the closest warehouse providing the preffered product')

if __name__=='__main__':
    app.run(debug=True)
  
