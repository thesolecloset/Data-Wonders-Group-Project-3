import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import extract
from sqlalchemy import create_engine, func
import datetime as dt

from flask import Flask, jsonify
from flask_cors import CORS
from flask import render_template

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///stocks2.db")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
Prices = Base.classes.prices
Volume = Base.classes.volume


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

CORS(app)

#################################################
# Flask Routes
#################################################

# @app.route("/")
# def welcome():
@app.route("/")
def welcome():
    """Render the HTML template."""
    return render_template("stockindex.html")  
    """List all available api routes."""
    # return (
    #     f"Available Routes:<br/>"
    #     f"/api/v1.0/ticker<br/>"
    #     f"/api/v1.0/volume<br/>"
    #     f"/api/v1.0/maxminaverageprice<br/>"
    #     f"/api/v1.0/maxminaveragevolume"
    # )

@app.route("/api/v1.0/ticker")
def ticker():
    # Create session from Python to the DB
    session = Session(engine)

# Calculate the date 5 year from the last date in data set.
    ticker_query = dt.date(2017, 1, 1) - dt.timedelta(days=1830)
    #print(ticker_query)

# Perform a query to retrieve all data

    five_year_data_query = session.query(Prices.Date, Prices.ticker, Prices.price).filter (Prices.Date >= ticker_query).all()
    # five_year_data_query = (session.query(Prices.Date, Prices.price).
    #                          filter(Prices.Date >= ticker_query). filter(Prices.ticker== 'MAR').all())
    #print(five_year_data_query)
    # Close Session
    session.close()
    # Create a dictionary
    five_year_data = []
    for date, ticker, price in five_year_data_query:
        five_year_dict ={}
        five_year_dict["Date"] = date
        five_year_dict["ticker"] = ticker
        five_year_dict["price"] = price
        five_year_data.append(five_year_dict)
    return jsonify(five_year_data)


@app.route("/api/v1.0/volume")
def volume():
   # Create session from Python to the DB
    session = Session(engine)

# Calculate the date 5 year from the last date in data set.
    volume_query = dt.date(2017, 1, 1) - dt.timedelta(days=1830)
    #print(ticker_query) 
# Perform a query to retrieve all data

    five_year_volume_query = session.query(Volume.Date, Volume.ticker, Volume.volume).filter (Volume.Date >= volume_query).all()
    # five_year_data_query = (session.query(Prices.Date, Prices.price).
    #                          filter(Prices.Date >= ticker_query). filter(Prices.ticker== 'MAR').all())
    #print(five_year_data_query)
    # Close Session
    session.close()
    # Create a dictionary
    five_year_volume_data = []
    for date, ticker, volume in five_year_volume_query:
        five_year_volume_dict ={}
        five_year_volume_dict["Date"] = date
        five_year_volume_dict["ticker"] = ticker
        five_year_volume_dict["volume"] = volume
        five_year_volume_data.append(five_year_volume_dict)
    return jsonify(five_year_volume_data)

@app.route('/api/v1.0/maxminaverageprice')

def max_min_average():
    session = Session(engine)
    ticker_query = dt.date(2017, 1, 1) - dt.timedelta(days=1830)
   

    # Calculate max, min, and avg prices for each year for lasr=t 5 years

    query_result = session.query(
        Prices.ticker,
        extract('year', Prices.Date).label('year'),
        func.avg(Prices.price),
        func.max(Prices.price),
        func.min(Prices.price)
    ).filter(Prices.Date >= ticker_query).group_by(Prices.ticker, 'year').all()

    ticker_stats_data = []
    for ticker, year, avg_price, max_price, min_price in query_result:
        ticker_year_dict = {}
        ticker_year_dict["Ticker"] = ticker
        ticker_year_dict["Year"] = year
        ticker_year_dict["AveragePrice"] = avg_price
        ticker_year_dict["MaxPrice"] = max_price
        ticker_year_dict["MinPrice"] = min_price
        ticker_stats_data.append(ticker_year_dict)

    session.close()

    return jsonify(ticker_stats_data)

@app.route('/api/v1.0/maxminaveragevolume')

def max_min_average_volume():
    session = Session(engine)
    volume_query = dt.date(2017, 1, 1) - dt.timedelta(days=1830)
   

    # Calculate max, min, and avg prices for each year for lasr=t 5 years

    query_result_vol = session.query(
        Volume.ticker,
        extract('year', Volume.Date).label('year'),
        func.avg(Volume.volume),
        func.max(Volume.volume),
        func.min(Volume.volume)
    ).filter(Volume.Date >= volume_query).group_by(Volume.ticker, 'year').all()

    ticker_stats_volume_data = []
    for ticker, year, avg_volume, max_volume, min_volume in query_result_vol:
        ticker_year_volume_dict = {}
        ticker_year_volume_dict["Ticker"] = ticker
        ticker_year_volume_dict["Year"] = year
        ticker_year_volume_dict["AverageVolume"] = avg_volume
        ticker_year_volume_dict["MaxVolume"] = max_volume
        ticker_year_volume_dict["MinVolume"] = min_volume
        ticker_stats_volume_data.append(ticker_year_volume_dict)

    session.close()

    return jsonify(ticker_stats_volume_data)   

if __name__ == '__main__':
    app.run(debug=True)
