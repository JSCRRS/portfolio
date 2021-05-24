export default function App() {
    function copyEmail() {
        const email = "myEmail";
        navigator.clipboard.writeText(email);
        const tooltip = document.getElementsByClassName("email-tooltip");
        tooltip.innerHTML = "copied!";
    }

    function onEnter() {
        document.body.classList.toggle("tooltip-open");
    }

    function onLeave() {
        document.body.classList.toggle("tooltip-open");
    }

    return (
        <div className="main-wrapper">
            <div className="person">
                <p className="introduction">
                    I am a Junior Fullstack Web Developer. With a background in
                    systemic organizational consulting, I have a
                    solution-oriented mindset that is complemented by my
                    curiosity and empathetic perspective as anthropologist.
                </p>
                <span className="email-tooltip">click to copy</span>
                <div className="person-info">
                    <button
                        className="info-button"
                        onClick={copyEmail}
                        onMouseOver={onEnter}
                        onMouseOut={onLeave}
                    >
                        email
                    </button>
                    <button className="info-button">linkedIn</button>
                    <button className="info-button">github</button>
                    <button className="info-button">cv</button>
                </div>
            </div>
        </div>
    );
}
