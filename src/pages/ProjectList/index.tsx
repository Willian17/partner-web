import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import ProjectItem,{ Project } from '../../components/ProjectItem';
import Header from '../../components/Header';

import './styles.css'

function ProjectList(){
    const [projects,setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])
    return(
        <div id="page-project-list" className="container">
            <Header title="Estes são os sócios disponíveis"/>
            <main>
                {projects.map((project: Project) => {
                    return <ProjectItem project={project} />
                })}
            </main>
        </div>
    )
}

export default ProjectList