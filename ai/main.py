# YT Video: https://www.youtube.com/watch?v=PuZY9q-aKLw&t=957s&ab_channel=NeuralNine
# Imports for our Projects

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader as web
import datetime as dt

from sklearn.preprocessing import MinMaxScaler

import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Dropout, LSTM


def print_hi(from_dimitri):
    print(f'Hi, {from_dimitri}')


if __name__ == '__main__':
    print_hi("Whats up CS Club!  Howdy, boys.  Lets get Rowdy.")
