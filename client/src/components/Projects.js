export default function Projects() {
    return (
        <div className="project-wrapper">
            <img
                className="project-img"
                src="/profile.jpg"
                alt="project logo"
            ></img>
            <div>
                <div className="project-text">
                    <p className="project-title">Title</p>
                    <p className="project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do ei
                    </p>
                </div>
            </div>
            <button className="project-button">view</button>
        </div>
    );
}
