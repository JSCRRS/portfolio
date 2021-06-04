import { Link } from "react-router-dom";

export default function Person() {
    function copyEmail() {
        const email = "myEmail@email.com";
        navigator.clipboard.writeText(email);
        const tooltip = document.getElementById("email-tooltip");
        tooltip.innerHTML = "copied!";
    }

    function showTooltip() {
        const tooltip = document.createElement("p");
        const text = document.createTextNode("click to copy");
        tooltip.appendChild(text);
        document.getElementById("email-tooltip").appendChild(tooltip);
    }

    function hideTooltip() {
        const tooltip = document.getElementById("email-tooltip");
        tooltip.removeChild(tooltip.firstChild);
    }

    return (
        <div className="person">
            <p className="introduction">
                I am a Junior Fullstack Web Developer. With a background in
                systemic organizational consulting, I have a solution-oriented
                mindset that is complemented by my curiosity and empathetic
                perspective as anthropologist.
            </p>
            <div id="email-tooltip"></div>
            <div className="person-info">
                <button
                    className="info-button"
                    onClick={copyEmail}
                    onMouseEnter={showTooltip}
                    onTouchStart={showTooltip}
                    onMouseLeave={hideTooltip}
                    onTouchEnd={hideTooltip}
                >
                    email
                </button>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/joshua-musiol"
                >
                    <button className="info-button"> linkedIn</button>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JSCRRS"
                >
                    <button className="info-button"> github</button>
                </a>

                <Link to="/cv">
                    <button className="info-button">cv</button>
                </Link>
            </div>
        </div>
    );
}
