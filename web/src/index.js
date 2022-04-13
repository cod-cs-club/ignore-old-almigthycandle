// Import React.
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

// Import our custom React components and any other files.
import Header from "./components/Header/Header"
import Intro from "./components/Intro/Intro"
import StockChart from "./components/StockChart/StockChart"
import StockInfo from "./components/StockInfo/StockInfo"
import StockLoading from "./components/StockLoading/StockLoading"
import "./index.css"

// Main app component.
function App() {
	const [stockData, setStockData] = useState()

	// Fetch stock data from python backend, then run the set state function.
	function fetchStock(search) {
		console.log(`Fetching stock for: ${search}`)
		fetch(`http://localhost:5000/predict-future-price?symbol=${search}`)
			.then(res => res.json())
			.then(data => setStockData(data))
	}

	// When website first launches, grab this stock to show something.
	useEffect(() => {
		setTimeout(() => { // Simulate lag.
			fetchStock("MSFT")
		}, 1500)
	}, [])

	return (
		<>
			<Header />
			<Intro fetchStock={fetchStock} />
			<div id="main-stock-container">
				{!stockData && <StockLoading />}
				{stockData && <StockChart stockData={stockData} />}
				{stockData && <StockInfo stockData={stockData} />}
			</div>
		</>
	)
}

// Render the app components.
ReactDOM.render(<App />, document.querySelector("#root"))