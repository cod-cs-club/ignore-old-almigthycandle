# Flask Back End
# use "flask run"

from flask_cors import CORS
from flask import Flask, request
from main import predict_future_prices

app = Flask(__name__)
CORS(app)

@app.route("/predict-future-price")
def predict_future_price():
    symbol = request.args.get('symbol')
    if not symbol:
        return {'error': 'symbol parameter was missing'}

    # price_prediction is a Dataframe object, this converts it to a normal python dict
    price_prediction = predict_future_prices(symbol) \
                .reset_index() \
                .rename(columns={'index': 'time'}) \
                .to_dict('records')

    return {
        'prices': price_prediction
    }
