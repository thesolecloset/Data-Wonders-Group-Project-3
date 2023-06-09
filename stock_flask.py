import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///stocks.db")

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


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/ticker<br/>"
        f"/api/v1.0/adj_close<br/>"
        f"/api/v1.0/volume"
    )

@app.route("/api/v1.0/ticker")
def ticker():
    # Create session from Python to the DB
    session = Session(engine)

# Calculate the date 5 year from the last date in data set.
    ticker_query = dt.date(2017, 1, 1) - dt.timedelta(days=1830)
    #print(ticker_query)

# Perform a query to retrieve the data and precipitation scores
# Query all passengers
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


 #@app.route("/api/v1.0/date")
 #def names():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of all passenger names"""
#     # Query all passengers
#     results = session.query(Passenger.name).all()

#     session.close()

#     # Convert list of tuples into normal list
#     all_names = list(np.ravel(results))

#     return jsonify(all_names)


# @app.route("/api/v1.0/passengers")
# def passengers():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of passenger data including the name, age, and sex of each passenger"""
#     # Query all passengers
#     results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

#     session.close()

#     # Create a dictionary from the row data and append to a list of all_passengers
#     all_passengers = []
#     for name, age, sex in results:
#         passenger_dict = {}
#         passenger_dict["name"] = name
#         passenger_dict["age"] = age
#         passenger_dict["sex"] = sex
#         all_passengers.append(passenger_dict)

#     return jsonify(all_passengers)


if __name__ == '__main__':
    app.run(debug=True)
