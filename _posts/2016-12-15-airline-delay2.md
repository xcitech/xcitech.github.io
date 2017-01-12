---
title: "Predicting Airline Delays: Part 2"
header:
  image: https://xcitech.github.io/assets/images/LA_header.jpg
excerpt_separator: "<!--more-->"
categories:
  - Projects
tags:
  - Airline delay
  - machine learning
  - python
---

## Which airline should you choose?

According to this Bloomberg [report](https://www.bloomberg.com/news/articles/2016-08-23/blame-the-airlines-not-the-weather-for-most-u-s-flight-delays), delays caused by Airline factors have exceeded delays caused by weather or the air-traffic system in recent years. One main reason being the latest systems which have got better at adapting to severe weather than in the past. Now the biggest cause of late arrivals are the airlines themselves, with delays triggered by mechanical breakdowns, lack of flight crews and other factors attributed to the infrastructure or operating efficiency of the airline. So now Airlines can no longer get away with delays by blaming the weather!

So it all boils down to which airline you choose. So given a choice between Delta and American, which one should you choose? Data comes to the rescue here!

![Airline Performance][airline_performance]

The chart plots the 16 airline carriers in the dataset, with Average Arrival Delay on the x-axis and percentage of flights delayed (>15 minutes) on the y-axis. So if you had to choose between Delta and American, Delta is definitely the better bet for an on-time arrival!

### The Airline-Delay Predictor App [airline-scorecard.herokuapp.com](https://airline-scorecard.herokuapp.com/)
The numbers given above are averaged over all domestic flights in the US. These numbers will vary depending on particular routes. For example, airline A might perform better than airline B from New York to San Francisco, but airline B might perform better from Chicago to Atlanta. Using the web-app, you can choose your origin and destination airports, and quickly get the stats for all flights between the two specified airports in the last three years. 

![Screenshot 1][screen1]

The app gives a bunch of numbers, including the average departure and arrival delays, average number of flights per day, the top 5 airline carriers on this route, etc. The average delays and the percentage of flights delayed are given for the top 5 carriers. If you choose to predict airline delay, the app will also give a probability of your flight to be delayed more than 5 minutes. 

![Screenshot 3][screen3]

![Screenshot 2][screen2]

As they say, a journey of a thousand miles begins with one step. And, a delay-free flight begins with a little research :)

---
[airline_performance]: https://xcitech.github.io/assets/images/airline_performance.png "Airline Performance"
[screen1]: https://xcitech.github.io/assets/images/screen1.png "Screenshot 1"
[screen2]: https://xcitech.github.io/assets/images/screen2.png "Screenshot 2"
[screen3]: https://xcitech.github.io/assets/images/screen3.png "Screenshot 3"