import "./StockLoading.css"

// Chart loading / error message component.
function ChartLoading() {
	return (
        <div id="stock-loading-container">
            <img src="/assets/loading.svg" className="loading" />
            <h2>Fetching Data</h2>
            <h2 style={{fontSize: "30px"}}>[Temp Msg] Make sure python backend is running.</h2>
        </div>
    )
}

export default ChartLoading