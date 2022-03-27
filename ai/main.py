# YT Video: https://www.youtube.com/watch?v=PuZY9q-aKLw&t=957s&ab_channel=NeuralNine
# Imports for our Projects

from tracemalloc import start
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader as web
import yfinance as yf
import datetime as dt

from sklearn.preprocessing import MinMaxScaler

import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Dropout, LSTM

#get 1 years worth of data for Apple
stock_info = yf.Ticker('AAPL').info
market_price = stock_info['regularMarketPrice']
previous_close_price = stock_info['regularMarketPreviousClose']
aaple = yf.Ticker("AAPL")
prices = aaple.history(period="1y")

#graphical representation
prices['20d'] = prices['Close'].rolling(20).mean() #finds averages for 20 day mark for apple stock
prices['200d'] = prices['Close'].rolling(200).mean()
prices[['Close', '20d', '200d']].plot()
plt.title('Moving Averages Apple')

#calculate cumulative returns & plotting
prices['daily_return'] = prices['Close'].pct_change()
prices['cumulative_return'] = prices['daily_return'].cumsum()
prices['cumulative_return'].plot()
plt.title('Cumulative Return Apple')

def print_hi(from_dimitri):
    print(f'Hi, {from_dimitri}')


if __name__ == '__main__':
    print_hi("Whats up CS Club!  Howdy, boys.  Lets get Rowdy.")
    print(prices)
    

