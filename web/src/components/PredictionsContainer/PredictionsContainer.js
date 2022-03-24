import { useState } from "react"
import PredictionsTable from "../PredictionsTable/PredictionsTable"
import PredictionsAccuracy from "../PredictionsAccuracy/PredictionsAccuracy"
import "./PredictionsContainer.css"

// PredictionsContainer component.
function PredictionsContainer(props) {
    //const [openSettings, setOpenSettings] = useState(false)

    return (
        <section id="predictions-container">
            <PredictionsTable data={props} />
            <PredictionsAccuracy data={props} />
        </section>
    )
}

export default PredictionsContainer
