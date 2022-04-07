import './PredictionsTable.css';

 
const PredictionsTable = () => {
    return(
        <><div id="table">
            
            <h4>AI PREDICTIONS</h4>
            <div class="flex-container">
                <div class="flex-items">
                    Short Term:
                    <img class="arrowImg" src="/greenArrow.png" alt="green-arrow"></img>
                    <div>2w-6w</div>
                </div>
            </div>
            <div class="flex-container">
                <div class="flex-items">
                    Mid Term:
                    <img class="arrowImg" src="/greenArrow.png" alt="green-arrow"></img>
                    <div>6w-9m</div>
                </div>
            </div>
            <div class="flex-container">
                <div class="flex-items">
                    Long Term:
                    <img class="arrowImg" src="/redArrow.png" alt="red-arrow"></img>
                    <div>9m+</div>
                </div>
            </div>
        </div></>
 
    )
}
 
export default PredictionsTable;