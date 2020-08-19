import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import gmailIcon from '../../assets/images/icons/gmail.png'
import localIcon from '../../assets/images/icons/local.svg'
import './styles.css'

export interface Project{
    id: number,
    name: string,
    avatar: string,
    email: string,
    whatsapp: string,
    address: string,
    title: string,
    description: string
}
interface ProjectItemProps{
    project: Project
}

const ProjectItem: React.FC<ProjectItemProps> =({project})=>{
    return(
        <article className="project-item">

        <header>
          <img src={project.avatar} alt={project.name} />
          <div>
            <strong>{project.name}</strong>
            <span>{project.title}</span>
          </div>
        </header>

        <p>{project.description}</p>

        <span className="address">
            <img src={localIcon} width="35px" alt="Local"/> 
            {project.address}
        </span>

        <footer>
          <a 
            href={`mailto:${project.email}?subject=Hello%20again`} 
            className="email"
          >
            <img width="35px" src={gmailIcon} alt="Email"/>
            Email
          </a>

          <a
            target="_blank" rel="noopener noreferrer"
            href={`http://wa.me/${project.whatsapp}`}
            className="whatsapp"
          >
            <img src={whatsappIcon} alt="Whatsapp" />
            Whatsapp
          </a>
        </footer>
      </article>
    )
}

export default ProjectItem