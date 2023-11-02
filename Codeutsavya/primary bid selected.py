from flask import Flask,render_template,request
import mysql.connector
con=mysql.connector.connect(host='sql12.freesqldatabase.com',user='sql12658614',password='pwPUmTEKQ3',database='sql12658614')
if con.is_connected:
    print("db connected")
else:
    print("db not connected")

lowest_bid=0
app=Flask(__name__,template_folder='template')

@app.route('/',methods=['GET','POST'])
def start():
    if request.method=='POST':
        client_bid=request.form['bid']
        if client_bid<lowest_bid:
            lowest_bid=client_bid 
        return render_template("success.html")
    else:
        return render_template("infro.html")


if __name__=='__main__':
    app.run(debug=True)