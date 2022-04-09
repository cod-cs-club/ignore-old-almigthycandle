import './PredictionsTable.css';
import { useState, useEffect } from 'react';

 
const PredictionsTable = () => {
    const endpoint = "http://localhost:5000/predict-future-price?symbol=MSFT"
    const [prices, setPrices] = useState({});
    useEffect(() => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => setPrices(data))
    }, [])
    return(
        <><div id="table">
            <h4>AI PREDICTIONS</h4>
            <div class="flex-container">
                <div class="flex-items">
                    AI Predictions (from <a href={endpoint}>{endpoint}</a>):
                    <img class="arrowImg" src="/greenArrow.png" alt="green-arrow"></img>
                    <h3>Prices:</h3>
                    <div>{JSON.stringify(prices)}</div>
                </div>
            </div>
        </div></>
 
    )
}
 
export default PredictionsTable;
