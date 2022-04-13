import "./StockChart.css"

// Import ChartJS/react-chartjs-2.
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

// Stocks line chart component.
function StockChart({stockData}) {
	if (stockData) {
		// Only create if there is actual stock data.
		// Take the stock data and put it in a JSON syntax that ChartJS can use.
		let chart = {
			labels: stockData.prices.map((data) => data.time.split(",")[0]), // [2016, 2017, 2018]
			datasets: [
				{
					label: "AI Prediction",
					backgroundColor: ["aqua"],
					borderColor: ["aqua"],
					borderWidth: 5,
					data: stockData.prices.map((data) => data.price + Math.floor(Math.random() * 9) - 4), // Fake for now
				},
				{
					label: "Real Price",
					backgroundColor: ["purple"],
					borderColor: ["purple"],
					borderWidth: 5,
					data: stockData.prices.map((data) => data.price),
				}
			]
		}

		// Now that we created the JSON variable, we can use it!
		return (
			<div id="chart-container">
				<h2>TRCY - TOTALLY REAL COMPANY</h2>
				<Line data={chart} />
			</div>
		)
	}
}

export default StockChart