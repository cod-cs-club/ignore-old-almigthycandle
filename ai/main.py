# YT Video: https://www.youtube.com/watch?v=PuZY9q-aKLw&t=957s&ab_channel=NeuralNine
# Imports for our Projects

#Version 0.1.5
#Updated duration of each Epoch, time of study for AI, 
#WARNING: Time of each Epoch is approximately 30+ seconds, this increases accuracy of prediction
#As time elapses the more information is learned. Will experiment with extending in the future.

from audioop import minmax
from tracemalloc import start
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader as web
from sklearn.model_selection import PredefinedSplit

import datetime as dt

from sklearn.preprocessing import MinMaxScaler, scale

import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Dropout, LSTM

#get 1 years worth of data for Apple
company = 'AAPL'
start = dt.datetime(1998,1,1)
end = dt.datetime(2019,1,1)
data = web.DataReader(company, 'yahoo', start, end)
prediction_days = 120
scaler = MinMaxScaler(feature_range=(0,1))
now = dt.datetime.now()
 
#prepare data

scaled_data = scaler.fit_transform(data['Close'].values.reshape(-1,1))

x_train = []
y_train = []

for x in range(prediction_days, len(scaled_data)):
    x_train.append(scaled_data[x-prediction_days:x, 0])
    y_train.append(scaled_data[x, 0])

x_train, y_train = np.array(x_train), np.array(y_train)
x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))

# Construction of the AI model:
# Where model is the representation of the AI itself
model = tf.keras.Sequential()
model.add(LSTM(units=(128), return_sequences=True, input_shape=(x_train.shape[1], 1)))
model.add(Dropout(0.25))
model.add(LSTM(units=128, return_sequences=True))
model.add(Dropout(0.25))
model.add(LSTM(units=128))
model.add(Dropout(0.25))
model.add(Dense(units=1)) #Predicition of the next close

#Training starts here, runs for 25 epochs
#Each epoch is defined by model specifications above, can be modified to increase accuracy
model.compile(optimizer='adam', loss='mean_squared_error')
model.fit(x_train, y_train, epochs=25, batch_size=56)
print("Training is complete!")
#load test data
test_start=dt.datetime(2019,1,1)
test_end=dt.datetime.now()

test_data = web.DataReader(company, 'yahoo', test_start, test_end)
actual_prices = test_data['Close'].values

total_dataset = pd.concat((data['Close'], test_data['Close']), axis=0)

model_inputs = total_dataset[len(total_dataset) - len(test_data) - prediction_days:].values
model_inputs = model_inputs.reshape(-1,1)
model_inputs = scaler.transform(model_inputs)

#Make predicition on Test Data
x_test = []

for x in range(prediction_days,len(model_inputs)):
    x_test.append(model_inputs[x-prediction_days:x, 0])

x_test = np.array(x_test)
x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))
predicted_prices = model.predict(x_test)
predicted_prices = scaler.inverse_transform(predicted_prices)

#Plot the test prediction

plt.plot(actual_prices, color="black", label=f"Actual {company} Price")
plt.plot(predicted_prices, color="green", label=f"Predicted {company} Price")
plt.title(f"{company} Share Price")
plt.xlabel('Time')
plt.ylabel(f'{company} Share Price')
plt.legend()
plt.show()

real_data = [model_inputs[len(model_inputs) + 1 - prediction_days:len(model_inputs+1), 0]]
real_data = np.array(real_data)
real_data = np.reshape(real_data, (real_data.shape[0], real_data.shape[1], 1))
prediction = model.predict(real_data)
prediction = scaler.inverse_transform(prediction)
print (f"Prediction: {prediction}")

def print_hi(from_dimitri):
    print(f'Hi, {from_dimitri}')


if __name__ == '__main__':
    print_hi("Whats up CS Club!  Howdy, boys.  Lets get Rowdy.")
    
    

