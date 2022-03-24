// Import React.
import React from "react"
import ReactDOM from "react-dom"

// Import our custom React components and any other files.
import Header from "./components/Header/Header"
import Chart from "./components/Chart/Chart"
import PredictionsContainer from "./components/PredictionsContainer/PredictionsContainer"
import { getData } from "./utils"
import "./index.css"

// Get random data (for now) for stock chart.
class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) return <div>Loading...</div>
		return <Chart type="svg" data={this.state.data} />
	}
}

// Render the app components.
ReactDOM.render(
	<>
	  	<Header />
	  	<ChartComponent stockID="TRCY" stockCompany="TOTALLY REAL COMPANY" />
	  	<PredictionsContainer accuracy={Math.floor(Math.random() * 100)} />
	</>,
	document.querySelector("#root")
)