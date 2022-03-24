import { useState } from "react"
import "./PredictionsAccuracy.css"

// PredictionsAccuracy component.
function PredictionsAccuracy(props) {
    let color = "rgb(0, 114, 15)"
    if (props.data.accuracy <= 50) color = "rgb(255, 0, 0)"
    if (props.data.accuracy <= 75) color = "rgb(218, 134, 0)"

    return (
        <div id="accuracy-container">
            <h4>PAST AI ACCURACY</h4>
            <h5 style={{ color: `${color}` }}>{props.data.accuracy}%</h5>
        </div>
    )
}

export default PredictionsAccuracy
