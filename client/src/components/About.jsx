import resume from "../assets/Resume.pdf";

export default About;

function About() {
    return (
        <div className="page about">
            <div className="page-content">
                <h2>About Me</h2>
                <p>Hello! My name is Reem Alsamara . I am passionate about software development and creating impactful applications. I enjoy solving complex problems and learning new technologies.</p>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="btn">View My Resume</a>
            </div>
        </div>
    );
}