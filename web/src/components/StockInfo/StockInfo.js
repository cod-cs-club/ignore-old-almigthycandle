import "./StockInfo.css"

// Stocks sidebar information component.
function StockInfo({stockData}) {
    // Later, the color of the number will change based of the %.
    let color = "rgb(0, 189, 38)"

    return (
        <div id="stock-info-container">
            <div id="predictions-container">
                <h4>AI PREDICTIONS</h4>
                <div id="predictions-sections">
                    <div>
                        <h5>Long Term 2W-6W</h5>
                        <img src="assets/upArrow.png" />
                    </div>
                    <div>
                        <h5>Mid Term 2W-6W</h5>
                        <img src="assets/upArrow.png" />
                    </div>
                    <div>
                        <h5>Short Term 2W-6W</h5>
                        <img src="assets/downArrow.png" />
                    </div>
                </div>
            </div>
            <div id="accuracy-container">
                <h4>PAST AI ACCURACY</h4>
                <h5 style={{ color: `${color}` }}>100%</h5>
            </div>
        </div>
    )
}

export default StockInfo