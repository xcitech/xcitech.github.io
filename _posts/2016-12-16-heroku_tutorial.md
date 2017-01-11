---
title: "Creating a Website to predict using a ML Model in Heroku"
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

Recently, I dived into the huge airline dataset available with the Bureau of the Transportation Statistics. My goal was to create a web app to predict whether a flight is delayed or not. While this is not a trivial problem, given the inherent uncertainties of delays caused by weather, machine failure, airport delays, etc, I was able to create a decent model which gave reasonable predictions. Now I was faced with the daunting task of how to make a web app - which could be used by users to predict delays?

## Python -> scikit-learn -> pickle -> flask -> Jinja2 -> Heroku

Using combination of all of the above, we can create a simple web-based interface to make predictions using Machine Learning libraries built in Python. 

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

### Saving the Model using Pickle
Now we will save the model to disk using Python's built in persistence model (pickle)

```python
import pickle
with open('logmodel.pkl', 'wb') as fid:
    pickle.dump(logmodel, fid,2) 
```

