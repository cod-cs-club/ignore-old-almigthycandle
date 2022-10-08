import "./Intro.css"

// Introduction section component.
function Intro({fetchStock}) {
    return (
        <main>
            <section>
                <h2>Hi, I'm Alca!<br />Let's Predict a Stock.</h2>
                <p>Almigthycandle.com hosts me, I am an AI that computes a stock's historical data and predicts if it's price is going to go up or down the next day.</p>
                <div id="search-container">
                    <div id="search-input-container">
                        <input type="text" placeholder="Search stock.." />
                        <img src="/assets/search.svg" id="icon-search" className="icon" />
                        {/* <img src=/assets/search.svg id="icon-loading" className="icon" /> */}
                    </div>
                    <button onClick={event => {
                        let value = document.querySelector("#search-input-container input").value
                        if (value.length >= 1) {
                            fetchStock(value)
                        }
                    }}>Predict</button>
                </div>
                <p id="search-error">That stock could not be found. Try again.</p>
            </section>
            <section>
                <img src="/assets/logo.png" />
            </section>
        </main>
    )
}

export default Intro