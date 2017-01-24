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

### Business problem

> You work for Kangaroo Auto Insurance Company, an Australian company.  Your business partner, who is not familiar with statistics at all, would like you to create a rating plan based on the historical auto claim data.  Your business partner is concerned about segmentation as well as competitiveness, as there are several other competitors in the market.
> For this case competition, your group’s task is to provide a method for predicting the claim cost for each policy and to convince your business partner that your predictions will work well.


## Data Description

The Kangaroo data set is based on one-year vehicle insurance policies from 2004 to 2005. The data is split into two parts: training and validation set. The actual competition had a third set (hold set) on which teams were scored. 

![Dataframe Head][data]

<sub>
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
</sub>

## What is the actual end goal?

Auto Insurances must be priced to reflect the provider's risk exposure. Thus, the pricing of an insurance policy depends on the underlying risk exposure of the insured. In this example, we are calculating 'Pure Premium', which is the average loss per exposure. PP = Frequency * Severity = loss $ / exposure. This is what a company would charge for a policy if not accounting for expenses and profit.

The model results are not evaluated on accuracy, but on the [Gini index](https://en.wikipedia.org/wiki/Gini_coefficient).

## Approaching the problem
After some basic EDA, it was observed that the data was highly skewed. Less than 7% of the data points had any claims, and the vast majority of our data had no claims. It was further observed that less than .4% of the data had greater than a single claim. So, we converted the numeric claim_count variable into a binary feature (0=no claim, 1=claim).

```python
df['claim_count'] = df['claim_count'].apply(lambda x:1 if x>0 else 0)
```


![Plot of Claim vs No-claim][plot1]


[data]: https://xcitech.github.io/assets/images/insurance_data.png "Head of the Data"
[plot1]: https://xcitech.github.io/assets/images/insurance/plot1.png "Plot 1"