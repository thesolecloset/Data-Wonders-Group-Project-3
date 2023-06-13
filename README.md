# Data Wonders Group – Stock Dashboard


## Selected Topic:
Our team is analyzing how COVID-19 impacted certain sector stocks within 
the S&P 500.  The Standard and Poor's 500, or simply the S&P 500, is a stock
market index tracking the stock performance of 500 of the largest 
companies listed on stock exchanges in the United States.  It is one of the 
most commonly followed equity indices.  Specifically, we decided to analyze 
the airline, cruise and hospitality industries (three industries assumed to be 
impacted by COVID-19) by sampling the following stocks; Hilton Worldwide 
Holdings, Inc., Delta Airlines, Carnival Corporation, United Airlines Holdings, 
Inc. and Marriott International, Inc.


## Reasoning:
We selected this topic because COVID-19 has had a major impact on the 
financial portfolios of many American citizens and companies.  Given that 
many Americans invest their money in the S&P 500, we wanted to see how 
individuals (and major companies, for that matter) have fared financially since COVID-19.


## Result:
We created a “stock dashboard” that visualizes the comparison of the (5) 
stocks before and after COVID-19.  Please follow the link below to view our 
stock dashboard:
Below is a static snapshot of the dashboard:


## Conclusions:
1. Airline, Cruise and Hospitality industries all were impacted negatively 
by COVID-19.
2. The Hospitality stocks (Marriott & Hilton) rebounded better than the 
other industries after COVID-19 (as much as 2X).
3. When examining the Debt/EBIT ratio for Airline vs. Hospitality 
industries, there is a significant increase in the Debt/EBIT ratio post 
COVID-19 for the Airline industry.  This could be the reason for “less 
than stellar performance” for the Airline industry.  Assuming 
correlation between the Airline and Hospitality industries could lead 
one to conclude Hospitality performance went down as Airline industry 
performance went down.


## Data:
We extracted the S&P 500 data from Yahoo Finance.  The initial dataset 
contained over 8,000 data points representing daily stock price and stock 
volume.  We parsed down the original dataset for our project needs.  COVID-
19 is assumed to take place in 2020 in our analysis (i.e., 2020 is the 
considered the divider for “pre” and “post” COVID-19 impact).  



## Main Process:
1. Download the data from Yahoo Finance in the form of an SQLite 
database
2. Create API/Flask routes using Flask and SQL Alchemy within Python
3. Create HTML/JavaScript visualization for the client/user



## Tools Utilized for Full Development Stack:
1. SQLite (to store data)
2. Jupyter Notebook run in Google CoLab (to explore data/tables within 
SQLite database)
3. Python (to build project)
4. jQuery (pulling APIs/Flask routes into JavaScript & HTML via AJAX)
5. HTML (to visualize dashboard for client/user)
6. JavaScript (to execute visuals on HTML webpage)
7. Visual Studio (execute Python code to run JavaScript & HTML) 
8. GitHub (to share and store project files – in GitHub Repository



## Potential Future Efforts/Expansion of Project:
1. Predictive Modeling of which stocks/portfolio mixture in which to 
invest.
2. Sentiment analysis – investor perception towards certain stocks based 
on latest news headlines.


