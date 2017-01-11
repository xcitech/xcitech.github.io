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

### Step 1: Create the Model in Python (and scikit-learn)
Read the data in a Pandas DataFrame

```python

import pandas as pd
df = pd.read_csv('sample_data.csv')

```




