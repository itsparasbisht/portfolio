import React from 'react'
import Project from './Project'
import './Projects.css'

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>PROJECTS</h1>
            <div className="projects__container">
                <Project source={"projects/project1.png"} title={"Instagram clone"} link={"https://instagram-byme.web.app"}/>
                <Project source={"projects/project2.png"} title={"Breaking Bad"} link={"https://its-breakingbad.netlify.app/"}/>
                <Project source={"projects/project3.png"} title={"Gallery App"} link={"https://my-gallery-app-5e3ca.web.app"}/>
                <Project source={"projects/project4.jpg"} title={"Amazon clone"} link={"https://clone-d781d.web.app"}/>
            </div>
        </div>
    )
}

export default Projects
