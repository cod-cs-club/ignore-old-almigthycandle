import './PredictionsTable.css';
 
const PredictionsTable = () => {
    return(
        <><div id="table">
            <h4>AI PREDICTIONS</h4>
            <div class="flex-container">
                <div class="flex-items">
                    Short Term:
                    <div>2w-6w</div>
                </div>
            </div>
            <div class="flex-container">
                <div class="flex-items">
                    Mid Term:
                    <div>6w-9m</div>
                </div>
            </div>
            <div class="flex-container">
                <div class="flex-items">
                    Long Term:
                    <div>9m+</div>
                </div>
            </div>
        </div></>
 
    )
}
 
export default PredictionsTable;