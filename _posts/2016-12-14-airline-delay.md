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

<script
    src="https://xcitech.github.io/assets/images/interact_barchart.js"
    id="c5337aae-d319-4bc7-a934-be6a5a72136d"
    data-bokeh-model-id="d714bbcf-c194-4ca9-9974-45cfdce5772e"
    data-bokeh-doc-id="cd4e7877-5ca3-4248-8364-5010d1e17c53"
></script>

In this small project, I wish to demonstrate that some carriers are worse than others, when we discount the effect of weather from the historical delays. 

The data for this project was obtained from the website of the [Bureau of Transportation Statistics] (http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236). The data is made available in monthly files, and you can select the fields to download. I download 3 years of flight data, covering the period September 2013 to August 2016. The size of the total dataset was over 2.35 GB. Total rows in the dataset was 17 million.

To remove the effect of weather from the historical flight delays, I needed the local weather at the origin and destination airports for every flight in the data. The first step in this was to load the data, clean it up and get the top 50 airports, sorted by combined arrival and departure traffic. 

![Top 50 Airports][top50]

Next, I downloaded hourly observational climate data from NOAA's [National Centers for Environmental Information (NCEI)](https://www.ncdc.noaa.gov) website. From the weather dataset, the local weather variables for the origin and the destination airport were appended to the main Airline Dataset for each and every flight.

<script
    src="https://xcitech.github.io/assets/images/heatmap.js"
    id="54c6a8d0-8eda-4df8-bfe2-a827131e6bf1"
    data-bokeh-model-id="f9c8fff2-14ec-4ef8-b948-771467a19e83"
    data-bokeh-doc-id="1eb87fbd-42d6-49c5-970e-94c4236e0ae2"
></script>

Weather Accounted Delay

<script
    src="https://xcitech.github.io/assets/images/interact_barchart2.js"
    id="9e4c8634-1d8e-4786-a396-661105dea8cb"
    data-bokeh-model-id="ce463129-74ff-45f8-a0cb-0a6cdd899ab3"
    data-bokeh-doc-id="f0ff9bcb-d59a-4d2a-afbc-914a6d818cb0"
></script>

[top50]: https://xcitech.github.io/assets/images/top50.png "Top 50 Airports"
