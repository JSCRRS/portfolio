import { Link } from "react-router-dom";

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
                        <h2>Joshua Musiol</h2>
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
                    <p>
                        Junior Full Stack Web Developer with a background in
                        systemic organizational consulting and a passion for
                        clean interfaces.
                    </p>
                </div>
            </section>
            <section className="projects-list">
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

                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                        fill="#111"
                                    ></path>
                                </svg>
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
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                        fill="#111"
                                    ></path>
                                </svg>
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
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                        fill="#111"
                                    ></path>
                                </svg>
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
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                        fill="#111"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>Node. js, PostgreSQL, Handlebars</p>
                        </div>
                    </div>
                </div>
            </section>
            <Link className="link-back" to="/">
                back
            </Link>
        </div>
    );
}
