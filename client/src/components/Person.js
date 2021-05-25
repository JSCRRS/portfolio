import { Link } from "react-router-dom";

export default function Person() {
    function copyEmail() {
        const email = "myEmail";
        navigator.clipboard.writeText(email);
        const tooltip = document.getElementsByClassName("email-tooltip");
        console.log(tooltip.innerHTML);

        tooltip.innerHTML = "copied!";
        console.log(tooltip.innerHTML);
    }

    function onEnter() {
        document.body.classList.toggle("tooltip-open");
    }

    function onLeave() {
        document.body.classList.toggle("tooltip-open");
    }
    return (
        <div className="person">
            <p className="introduction">
                I am a Junior Fullstack Web Developer. With a background in
                systemic organizational consulting, I have a solution-oriented
                mindset that is complemented by my curiosity and empathetic
                perspective as anthropologist.
            </p>
            <p className="email-tooltip">click to copy</p>
            <div className="person-info">
                <button
                    className="info-button"
                    onClick={copyEmail}
                    onMouseOver={onEnter}
                    onMouseOut={onLeave}
                >
                    email
                </button>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/joshua-musiol"
                >
                    <button className="info-button"> linkedIn</button>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
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