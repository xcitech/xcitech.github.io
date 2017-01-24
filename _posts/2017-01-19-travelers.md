---
title: "Predicting Auto Insurance Pure Premium"
excerpt_separator: "<!--more-->"
categories:
  - Tutorials
tags:
  - python
  - machine learning
  - insurance
  - 
  - jinja2
---
## Introduction

In this blog post, we explore the solution to a Case competition organized by Travelers Insurance Company.


```
Business problem

You work for Kangaroo Auto Insurance Company, an Australian company.  Your business partner, who is not familiar with statistics at all, would like you to create a rating plan based on the historical auto claim data.  Your business partner is concerned about segmentation as well as competitiveness, as there are several other competitors in the market.

For this case competition, your group’s task is to provide a method for predicting the claim cost for each policy and to convince your business partner that your predictions will work well.
```

## Data Description

The Kangaroo data set is based on one-year vehicle insurance policies from 2004 to 2005. There are 67856 policies, of which 4624 (6.8%) had at least one claim. The data is split into two parts: training and validation set. The actual competition had a third set (holdout set) on which teams were scored. 

Variable information in the data:

* ID: policy key
* Veh_value: market value of the vehicle in $10,000’s
* Veh_body: Type of vehicles
* Veh_age: Age of vehicles (1=youngest, 4=oldest)
* Gender: Gender of driver
* Area: Driving area of residence
* Dr_age: Driver’s age category from young (1) to old (6)
* Exposure: The basic unit of risk underlying an insurance premium
* Claim_ind: Indicator of claim (0=no, 1=yes)
* Claim_counts: The number of claims
* Claim_cost: Claim amount


[heroku]: https://xcitech.github.io/assets/images/heroku.png "Heroku Add App"