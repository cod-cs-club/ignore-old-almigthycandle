import { useEffect } from 'react';
import './Graph.css';

// Graph component.
function Graph() {
    useEffect(() => {
        // This will execute after the component has been rendered.
        // Just drew a few random lines as an example for the graph.
        drawLine(0, 250, 200, 100)
        drawLine(200, 100, 300, 150)
        drawLine(300, 150, 500, 0)
    })
    return (
        <canvas id="graph" width="500" height="250"></canvas>
    )
}

// Function that will draw a line on the graph.
// x1, y1 = Start position.
// x2, y2 = End position.
function drawLine(x1, y1, x2, y2) {
    let graph = document.querySelector("#graph")
    let ctx = graph.getContext("2d")

    ctx.strokeStyle = "blue"
    ctx.lineWidth = "3"
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

export default Graph;