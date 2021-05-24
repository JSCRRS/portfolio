export default function App() {
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
        <div className="main-wrapper">
            <div className="person">
                <p className="introduction">
                    I am a Junior Fullstack Web Developer. With a background in
                    systemic organizational consulting, I have a
                    solution-oriented mindset that is complemented by my
                    curiosity and empathetic perspective as anthropologist.
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

                    <button className="info-button">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/joshua-musiol"
                        >
                            linkedIn
                        </a>
                    </button>

                    <button className="info-button">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/JSCRRS"
                        >
                            github
                        </a>
                    </button>

                    <button className="info-button">cv</button>
                </div>
            </div>
        </div>
    );
}
