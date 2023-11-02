#rating for driver
from flask import Flask,render_template,request

app=Flask(__name__,template_folder='template')

arr=[]

@app.route('/',methods=['GET','POST'])
def start():
    if request.method=='POST':   
        get_review=request.form['rating_info']
        arr.append(get_review)
        
        a=arr.count(5)
        b=arr.count(4)
        c=arr.count(3)
        d=arr.count(2)
        e=arr.count(1)

        formula=((5*a)+(4*b)+(3*c)+(2*d)+(1*e))/len(arr)

        return formula

    else:
        return render_template("infro.html")


if __name__=='__main__':
    app.run(debug=True)