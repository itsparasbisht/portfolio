import React from 'react'
import './Project.css'

function Project({source, title, link}) {
    return (
        <div className="project">
            <a href={link}>
                <img src={source} alt="project image" />
                <h1>{title}</h1>
            </a>
        </div>
    )
}

export default Project
