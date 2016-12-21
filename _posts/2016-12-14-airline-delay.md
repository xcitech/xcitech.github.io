---
title: "Predicting Airline Delays"
excerpt_separator: "<!--more-->"
categories:
  - Projects
tags:
  - Airline delay
  - machine learning
  - python
---

## Which Airline should you choose?
#### Predicting Airline delays after discounting Weather effects using Machine Learning

Flight delays are nightmares for most people, be it the occassional flyer or the regular commuter. While the largest reason for airline delays is undoubtedly local weather at the origin and the destination, there are many other reasons which lead to significant flight delays - such as Tarmac delays, Airport congestion delays, Carrier delays, Traffic delays, etc. While weather cannot be predicted in advance, other delay components can be predictable. 

In this small project, I wish to demonstrate that some carriers are worse than others, when we discount the effect of weather from the historical delays. 

The data for this project was obtained from the website of the [Bureau of Transportation Statistics] (http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236). The data is made available in monthly files, and you can select the fields to download. I download 3 years of flight data, covering the period September 2013 to August 2016. The size of the total dataset was over 2.35 GB. Total rows in the dataset was 17 million.

To remove the effect of weather from the historical flight delays, I needed the local weather at the origin and destination airports for every flight in the data. The first step in this was to load the data, clean it up and get the top 50 airports, sorted by combined arrival and departure traffic. 

![Top 50 Airports][top50]

Next, I downloaded hourly observational climate data from NOAA's [National Centers for Environmental Information (NCEI)](https://www.ncdc.noaa.gov) website. From the weather dataset, the local weather variables for the origin and the destination airport were appended to the main Airline Dataset for each and every flight.

<script
    src="https://xcitech.github.io/assets/images/heatmap.js"
    id="2453a398-c49e-49b1-bdc8-9567f9775d83"
    data-bokeh-model-id="81441c3b-7c12-47ff-99cb-572265e8dd06"
    data-bokeh-doc-id="7253a980-51d8-4144-8ad4-41d6f745d0ef"
></script>

[top50]: https://xcitech.github.io/assets/images/top50.png "Top 50 Airports"
