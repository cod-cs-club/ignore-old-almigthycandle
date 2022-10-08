import "./Footer.css"

const Footer = () => {
    return(
        <footer>
            <div class="containerFooter">
                <h3>Make it happen at almightycandle.com</h3>
                <div class="containerFooter">
                    <h4>Hosted by the CS Team at College of DuPage</h4>
                </div>
                <div class="containerFooter" id="footer-img">
                    <a href="https://github.com/cod-cs-club/almigthycandle">
                        <img id="gitHubIcon" src="/gitHubLogo.png" alt="gitHub"></img>
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;