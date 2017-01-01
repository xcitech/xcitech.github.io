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


Flight delays are among the biggest nightmares for travellers, be it the occassional flyer or the regular commuter. According to the Bureau of Transportation Statistics, there are about ~15,000 scheduled flights per day in the United States, with more than two million passengers boarding these flights every day! [(Source)] (http://www.nytimes.com/2013/02/12/business/2012-was-the-safest-year-for-airlines-globally-since-1945.html?pagewanted=all&_r=0) 

![Los Angeles Airport][la]

While majority of these flights land at or before their scheduled time, about 19% of all flights are delayed more than 15 minutes. That translates to an average of 2950 flights delayed more than 15 minutes every day! While the largest reason for airline delays is undoubtedly local weather at the origin and the destination, there are many other reasons which lead to significant flight delays - such as Tarmac delays, Airport congestion delays, Carrier delays, Traffic delays, etc. While weather cannot be predicted in advance, other delay components can be predictable. 




total 17 million flights
18.8% of all flights were delayed more than 15 minutes




## Which Airline should you choose?
#### Predicting Airline delays after discounting Weather effects using Machine Learning

 

<script
    src="https://xcitech.github.io/assets/images/interact_barchart.js"
    id="c5337aae-d319-4bc7-a934-be6a5a72136d"
    data-bokeh-model-id="d714bbcf-c194-4ca9-9974-45cfdce5772e"
    data-bokeh-doc-id="cd4e7877-5ca3-4248-8364-5010d1e17c53"
></script>

In this small project, I wish to demonstrate that some carriers are worse than others, when we discount the effect of weather from the historical delays. 

The data for this project was obtained from the website of the [Bureau of Transportation Statistics] (http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236). The data is made available in monthly files, and you can select the fields to download. I download 3 years of flight data, covering the period September 2013 to August 2016. The size of the total dataset was over 2.35 GB. Total rows in the dataset was 17 million.

![Flight Paths][bar_plot1]

To remove the effect of weather from the historical flight delays, I needed the local weather at the origin and destination airports for every flight in the data. The first step in this was to load the data, clean it up and get the top 50 airports, sorted by combined arrival and departure traffic. 

![Top 50 Airports][top50]


In this small project, I wish to demonstrate that some carriers are worse than others, when we discount the effect of weather from the historical delays. 

![Flight Paths][bar_plot2]

The data for this project was obtained from the website of the [Bureau of Transportation Statistics] (http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236). The data is made available in monthly files, and you can select the fields to download. I download 3 years of flight data, covering the period September 2013 to August 2016. The size of the total dataset was over 2.35 GB. Total rows in the dataset was 17 million.

![Flight Paths][flight_paths]

To remove the effect of weather from the historical flight delays, I needed the local weather at the origin and destination airports for every flight in the data. The first step in this was to load the data, clean it up and get the top 50 airports, sorted by combined arrival and departure traffic. 

![Flight Paths][violin_plot]

Next, I downloaded hourly observational climate data from NOAA's [National Centers for Environmental Information (NCEI)](https://www.ncdc.noaa.gov) website. From the weather dataset, the local weather variables for the origin and the destination airport were appended to the main Airline Dataset for each and every flight.

<script
    src="https://xcitech.github.io/assets/images/heatmap.js"
    id="54c6a8d0-8eda-4df8-bfe2-a827131e6bf1"
    data-bokeh-model-id="f9c8fff2-14ec-4ef8-b948-771467a19e83"
    data-bokeh-doc-id="1eb87fbd-42d6-49c5-970e-94c4236e0ae2"
></script>


In this small project, I wish to demonstrate that some carriers are worse than others, when we discount the effect of weather from the historical delays. 

The data for this project was obtained from the website of the [Bureau of Transportation Statistics] (http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236). The data is made available in monthly files, and you can select the fields to download. I download 3 years of flight data, covering the period September 2013 to August 2016. The size of the total dataset was over 2.35 GB. Total rows in the dataset was 17 million.

To remove the effect of weather from the historical flight delays, I needed the local weather at the origin and destination airports for every flight in the data. The first step in this was to load the data, clean it up and get the top 50 airports, sorted by combined arrival and departure traffic. 


<script
    src="https://xcitech.github.io/assets/images/interact_barchart2.js"
    id="9e4c8634-1d8e-4786-a396-661105dea8cb"
    data-bokeh-model-id="ce463129-74ff-45f8-a0cb-0a6cdd899ab3"
    data-bokeh-doc-id="f0ff9bcb-d59a-4d2a-afbc-914a6d818cb0"
></script>

In this small project, I wish to demonstrate that some carriers are worse than others, when we discount the effect of weather from the historical delays. 

The data for this project was obtained from the website of the [Bureau of Transportation Statistics] (http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236). The data is made available in monthly files, and you can select the fields to download. I download 3 years of flight data, covering the period September 2013 to August 2016. The size of the total dataset was over 2.35 GB. Total rows in the dataset was 17 million.

To remove the effect of weather from the historical flight delays, I needed the local weather at the origin and destination airports for every flight in the data. The first step in this was to load the data, clean it up and get the top 50 airports, sorted by combined arrival and departure traffic. 

<script
    src="https://xcitech.github.io/assets/images/heatmap2.js"
    id="357c7544-a8ed-4237-8cc1-6955d759e491"
    data-bokeh-model-id="ae001df7-adfa-4111-a45c-87993afa1419"
    data-bokeh-doc-id="7b5845f1-43bf-4d3c-b0dc-02d0f2271ac4"
></script>

[la]: https://xcitech.github.io/assets/images/LA_airport_composite.jpg "Los Angeles Airport Traffic Composite"


[top50]: https://xcitech.github.io/assets/images/top50.png "Top 50 Airports"
[flight_paths]: https://xcitech.github.io/assets/images/flight_paths.png "Flight Paths"
[bar_plot1]: https://xcitech.github.io/assets/images/delay_bar_plot1.png "Flight Paths"
[bar_plot2]: https://xcitech.github.io/assets/images/delay_bar_plot2.png "Flight Paths"
[violin_plot]: https://xcitech.github.io/assets/images/delay_violin_plot.png "Flight Paths"
