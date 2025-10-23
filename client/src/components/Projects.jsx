import cameraImg from "../assets/camera.png";
import mapImg from "../assets/map.png";
import roadImg from "../assets/road.png";

function Projects() {
    const projectList = [
        {
            title: "Portfolio Website",
            desc: "A personal portfolio website showcasing my skills and projects.",
            img: mapImg
        },
        {
            title: "E-commerce App",
            desc: "A mock e-commerce app with product listing and shopping cart features.",
            img: cameraImg
        },
        {
            title: "Mobile Game UI",
            desc: "A concept design for a mobile game interface.",
            img: roadImg
        },
    ];

    return (
        <div className="page projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projectList.map((proj, index) => (
                    <div key={index} className="project-card">
                        <img src={proj.img} alt={proj.title} />
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
