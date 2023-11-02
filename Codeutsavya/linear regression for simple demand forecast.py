import numpy as np

def estimate_coef(x, y):
	# number of observations/points
	n = np.size(x)

	# mean of x and y vector
	m_x = np.mean(x)
	m_y = np.mean(y)

	# calculating cross-deviation and deviation about x
	SS_xy = np.sum(y*x) - n*m_y*m_x
	SS_xx = np.sum(x*x) - n*m_x*m_x

	# calculating regression coefficients
	b_1 = SS_xy / SS_xx
	b_0 = m_y - b_1*m_x
    
	return (b_0, b_1)

arr=[]
x = np.array([2,3,5,8])
y = np.array([3,6,5,12])

final_formula = estimate_coef(x, y)


from flask import Flask,render_template,request
import requests



app=Flask(__name__,template_folder='template')

@app.route('/',methods=['GET','POST'])
def start():
	fnf=final_formula
	return render_template("test.html",fnf=final_formula)
    

if __name__=='__main__':
    app.run(debug=True)