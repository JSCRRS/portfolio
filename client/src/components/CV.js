export default function CV() {
    return (
        <div className="cv-wrapper">
            <div className="cv-header">
                <div className="profile-wrapper">
                    <div className="profile-pic">
                        <img src="/profile.jpg" alt="profile" />
                    </div>
                </div>
                <div className="profile-details">
                    <div className="profile-name">
                        <h4>Joshua Musiol</h4>
                    </div>
                    <div>
                        <p>Junior Fullstack Developer in Berlin</p>
                    </div>
                    <div className="link">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            musiol.dev
                        </a>
                    </div>
                </div>
            </div>
            <section className="about">
                <h3>About</h3>
                <div>
                    Junior Full Stack Web Developer with a background in
                    systemic organizational consulting and a passion for clean
                    interfaces.
                </div>
            </section>
            <section className="projects">
                <h3>Projects</h3>
                <div className="experience">
                    <div className="date">
                        <span>2021</span>
                    </div>
                    <div className="experience-content">
                        <div className="title">
                            <div>
                                <a
                                    className="title-link"
                                    href="https://github.com/JSCRRS/cycle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Cycle
                                </a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>React, Node.js, Heroku</p>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="date">
                        <span>2021</span>
                    </div>
                    <div className="experience-content">
                        <div className="title">
                            <div>
                                <a
                                    className="title-link"
                                    href="https://github.com/JSCRRS/DuckClub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Duck Club
                                </a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>React , Node.js, PostgreSQL, AWS</p>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="date">
                        <span>2021</span>
                    </div>
                    <div className="experience-content">
                        <div className="title">
                            <div>
                                <a
                                    className="title-link"
                                    href="https://github.com/JSCRRS/ImageBoard"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Image Board
                                </a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>Vue. js, Node. js, PostgreSQL, AWS</p>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="date">
                        <span>2021</span>
                    </div>
                    <div className="experience-content">
                        <div className="title">
                            <div>
                                <a
                                    className="title-link"
                                    href="https://github.com/JSCRRS/Petition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Petition Website
                                </a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>Node. js, PostgreSQL, Handlebars</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
