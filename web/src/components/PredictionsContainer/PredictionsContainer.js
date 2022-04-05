import { useState } from "react"
import PredictionsTable from "../PredictionsTable/PredictionsTable"
import PredictionsAccuracy from "../PredictionsAccuracy/PredictionsAccuracy"
import "./PredictionsContainer.css"

// PredictionsContainer component.
function PredictionsContainer(props) {
    //const [openSettings, setOpenSettings] = useState(false)

    return (
        <section id="predictions-container">
            <div><PredictionsTable data={props} /></div>
            <PredictionsAccuracy data={props} />
        </section>
    )
}

export default PredictionsContainer
