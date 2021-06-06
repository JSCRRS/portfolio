export default function Projects() {
    return (
        <>
            <div className="project-wrapper">
                <img
                    className="project-img"
                    src="/profile.jpg"
                    alt="project logo"
                ></img>
                <div className="project-details">
                    <div className="project-text">
                        <p className="project-title">Cycle</p>
                        <p className="project-description">
                            An app that takes inspiration from the Pomodoro
                            technique.
                        </p>
                    </div>
                    <button className="project-button">view</button>
                </div>
            </div>
            <div className="project-wrapper">
                <img
                    className="project-img"
                    src="/profile.jpg"
                    alt="project logo"
                ></img>
                <div className="project-details">
                    <div className="project-text">
                        <p className="project-title">Duck Club</p>
                        <p className="project-description">
                            A social network for people who love ducks. Connect,
                            make friends.
                        </p>
                    </div>
                    <button className="project-button">view</button>
                </div>
            </div>
            <div className="project-wrapper">
                <img
                    className="project-img"
                    src="/profile.jpg"
                    alt="project logo"
                ></img>
                <div className="project-details">
                    <div className="project-text">
                        <p className="project-title">Image Board</p>
                        <p className="project-description">
                            A space for connoisseurs of Japanese woodblock
                            prints.
                        </p>
                    </div>
                    <button className="project-button">view</button>
                </div>
            </div>
            <div className="project-wrapper">
                <img
                    className="project-img"
                    src="/profile.jpg"
                    alt="project logo"
                ></img>
                <div className="project-details">
                    <div className="project-text">
                        <p className="project-title">Petition</p>
                        <p className="project-description">
                            A website where you publicly pledge to live a more
                            minimalist life.
                        </p>
                    </div>
                    <button className="project-button">view</button>
                </div>
            </div>
        </>
    );
}
