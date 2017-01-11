---
title: "Create a ML based prediction webapp using Flask and Heroku"
excerpt_separator: "<!--more-->"
categories:
  - Tutorials
tags:
  - python
  - machine learning
  - flask
  - heroku
  - jinja2
---
## Introduction

Recently, I dived into the huge airline dataset available with the Bureau of the Transportation Statistics. My goal was to create a web app to predict whether a flight is delayed or not. While this is not a trivial problem, given the inherent uncertainties of delays caused by weather, machine failure, airport delays, etc, I was able to create a decent model which gave reasonable predictions. Now I was faced with the daunting task of making a web app which could be used by users to predict delays.

## Python -> scikit-learn -> pickle model -> flask -> deploy on Heroku

Using combination of all of above, we can create a simple web-based interface to make predictions using Machine Learning libraries built in Python. The code from this tutorial can be found on [Github](https://github.com/xcitech/ml-flask-tutorial).

### Step 1: Create the Model in Python using Scikit-learn
Read the data in a Pandas DataFrame

```python
import pandas as pd
df = pd.read_csv('sample_data.csv')
```
In our sample data, we have data about airline delays, with the following columns: ORIGIN, DEST, UNIQUE CARRIER, DAY OF WEEK, DEP HOUR  and ARR DELAY (Arrival Delay in minutes). We will build a model to predict whether a flight is delayed more than 5 minutes or not, given the ORIGIN, DEST and UNIQUE_CARRIER.

```python
# Transform ARR_DELAY into a 1/0 format for Delay/No Delay
df['ARR_DELAY'] = df['ARR_DELAY'].apply(lambda x:1 if x>=5 else 0)
```
Next, we convert our Categorical Variables into Dummy Variables using pandas, and drop the original categorical variables.

```python
df = pd.concat([df,pd.get_dummies(df['UNIQUE_CARRIER'],drop_first=True,prefix="UNIQUE_CARRIER")],axis=1)
df = pd.concat([df,pd.get_dummies(df['ORIGIN'],drop_first=True,prefix="ORIGIN")],axis=1)
df = pd.concat([df,pd.get_dummies(df['DEST'],drop_first=True,prefix="DEST")],axis=1)
df = pd.concat([df,pd.get_dummies(df['DAY_OF_WEEK'],drop_first=True,prefix="DAY_OF_WEEK")],axis=1)
df = pd.concat([df,pd.get_dummies(df['DEP_HOUR'],drop_first=True,prefix="DEP_HOUR")],axis=1)
df.drop(['ORIGIN','DEST','UNIQUE_CARRIER','DAY_OF_WEEK','DEP_HOUR'],axis=1,inplace=True)
```
Now our data is ready to train the model. We will follow the usual procedure to split the data into Train/Test sets, and fit out Logistic Model with the training set.

```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(df.drop('ARR_DELAY',axis=1),df['ARR_DELAY'], test_size=0.30)

from sklearn.linear_model import LogisticRegression
#Train the model
logmodel = LogisticRegression()
logmodel.fit(X_train,y_train)

#Predicting on the Test Set
predictions = logmodel.predict(X_test)
```
The model has an overall accuracy of 0.61, which is not too bad given the limited dataset on which we trained the model. We will not try to improve on the model here, as that is not the objective of this tutorial!

### Step 2: Saving the Model using Pickle
Now we will save the model to disk using Python's built in persistence model (pickle)

```python
import pickle
with open('logmodel.pkl', 'wb') as fid:
    pickle.dump(logmodel, fid,2) 
```

One last thing: We need to create our feature vector of exact same dimension as our training set. To convert our user input into dummy variables, we should save a dict of the the dummy variables. Later we can populate our feature vector for prediction using this dict.

```python
#Create a Dataframe with only the dummy variables
cat = df.drop('ARR_DELAY',axis=1)
index_dict = dict(zip(cat.columns,range(cat.shape[1])))

with open('cat', 'wb') as fid:
    pickle.dump(index_dict, fid,2)  
```

### Step 3: Creating the Flask webapp
Flask is a “micro” framework for Python. It is called a micro framework because they want to keep the core simple but expandable. While confusing at first, it is relatively easy to set up a website on Flask using Jinja2 templating. For an in-depth Flask Tutorial, refer [here](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world).

Before starting with Flask, create and start a virtual environment (this is important for pushing the app to Heroku):

```
conda create -n flask_env python=2.7
source activate flask_env
```
Pip install Flask and other prerequisites. (You will need to install all modules you plan to use in your Flask app, here we need numpy, sklearn additionally)

```
pip install flask gunicorn
pip instal numpy
pip install sklearn
```

Now we create the simple flask app. The flask app consists of 2 main components: the python app (app.py) and the HTML templates. While we can return HTML code from the python file itself, it would be cumbersome to code entire HTML as a string in the python file. [Templating](http://jinja.pocoo.org/docs/2.9/) come to the rescue! For a more extensive tutorial on using templates in flask, read an excellent tutorial [here](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates).

Create the app.py file and put the following code inside it:

```python
from flask import Flask, request, render_template
import pickle
import numpy as np

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/getdelay',methods=['POST','GET'])
def get_delay():
    if request.method=='POST':
        result=request.form
		
		#Prepare the feature vector for prediction
        pkl_file = open('cat', 'rb')
        index_dict = pickle.load(pkl_file)
        new_vector = np.zeros(len(index_dict))
        
        try:
            new_vector[index_dict['DAY_OF_WEEK_'+str(result['day_of_week'])]] = 1
        except:
            pass
        try:
            new_vector[index_dict['UNIQUE_CARRIER_'+str(result['unique_carrier'])]] = 1
        except:
            pass
        try:
            new_vector[index_dict['ORIGIN_'+str(result['origin'])]] = 1
        except:
            pass
        try:
            new_vector[index_dict['DEST_'+str(result['dest'])]] = 1
        except:
            pass
        try:
            new_vector[index_dict['DEP_HOUR_'+str(result['dep_hour'])]] = 1
        except:
            pass
        
        pkl_file = open('logmodel.pkl', 'rb')
        logmodel = pickle.load(pkl_file)
        prediction = logmodel.predict(new_vector)
        
        return render_template('result.html',prediction=prediction)

    
if __name__ == '__main__':
	app.run()
```

Put the following HTML Template files in the /templates folder:

##### home.html

```
<!DOCTYPE html>
<html>
<title>Airline-delay-Prediction App</title>
<body>

<form action = "/getdelay" method="POST">
	<p> Select Origin:<input name="origin" type ="text" value="JFK" /> </p>
	<p> Select Destination: <input name="dest" type ="text" value="LAX" /> </p>
	<p> Select Airline :   
	<select name="unique_carrier">
		<option value="AA">American Airlines </option>
		<option value="DL">Delta Air Lines </option>
		<option value="B6">JetBlue Airways</option>
		<option value="WN">Southwest Airlines </option>
		<option value="UA" selected>United Air Lines </option>
	</select>
	<p> Select Day of Week:<input name="day_of_week" type ="text" value="1" /> </p>
	<p> Select Departure Hour: <input name="dep_hour" type ="text" value="10" /> </p>
	<p> <input type ="submit" value="submit" /> </p>
</form>
</body>
</html>
```

##### result.html

```
<!DOCTYPE html>
<html>
<title>Airline-delay-Prediction App</title>
<body>
{% raw %}
<h3> Delay Prediction: {{ prediction }} </h3>
{% endraw %}
<p><h4> [0] = No Delay </h4></p>
<p><h4> [1] = Delay of more than 5 minutes </h4></p>

</body>
</html>
```

Test your app by running the app.py file. If everything works, you should be able to run the app on your browser (usually at http://localhost:5000/). If everything works, proceed to the next step! 


### Step 4: Deploy the app to Heroku

For this part, you will need a [Heroku](https://www.heroku.com) account and the HerokuCLI. For our tutorial, we can use the free version of heroku. 

* Create the Procfile: A Procfile is a mechanism for declaring what commands are run by your application’s dynos on the Heroku platform. Create a file called "Procfile" and put the following in it:

```
web: gunicorn app:app --log-file -
```

* Create the python requirements file by running the following at the command prompt:

```
$ pip freeze > requirements.txt
```


* Set up HerokuCLI using the instructions [here](https://devcenter.heroku.com/articles/getting-started-with-python#set-up).

* Create a new app on the Heroku Website by logging into your account.

![heroku add][heroku]

* Login to Heroku through the command prompt

```
$ heroku login
```

* Go to your directory containing the flask app (app.py and /templates) and run the following command (Replace airline-predict-heroku with your-app-name)

```
$ git init
$ heroku git:remote -a airline-predict-heroku
```

* Deploy your application

```
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

Your app should be now live at your-app-name.herokuapp.com! Check out a working version of the app [here](https://airline-predict-heroku.herokuapp.com/).  The code from this tutorial can be found on [Github](https://github.com/xcitech/ml-flask-tutorial). When you load your app for the first time (or after 15 minutes of inactivity), heroku takes about 30 seconds to load up your app on an active dyno. 

### Final Words
In this tutorial, we made a simple web based prediction app based on python ML libraries. To see the fully working version of the airline-delay project, check out [https://airline-scorecard.herokuapp.com/](https://airline-scorecard.herokuapp.com/).




[heroku]: https://xcitech.github.io/assets/images/heroku.png "Heroku Add App"