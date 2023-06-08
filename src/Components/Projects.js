import React, {useEffect} from "react";
import "../css/sitewide.scss"
import "../css/projects.scss"
import { FadeInSection } from './Fade.js'
import { v4 as uuidv4 } from 'uuid';

export default function Projects() {
    const [projects, setProjects] = React.useState([]);

    function addProject(name) {
        const project = {
            name: name,
            key: uuidv4(), // generate a unique key using UUID
        };
        setProjects([...projects, project]);
    }

    useEffect(() =>{
        let PROJECT_ID = "0lmdryc9";
        let DATASET = "production";
        let QUERY = encodeURIComponent('*[_type == "project"]');

        // Compose the URL for your project's endpoint and add the query
        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

     fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
            console.log(result);

            const fetchedProjects = [];

            if (result.length > 0) {
                result.forEach((project) => {
                    fetchedProjects.push({
                        name: project.name,
                        key: project._id, // use a unique identifier from the fetched data as the key
                    });
                });

                // set the projects state with the fetched projects
                setProjects(fetchedProjects);
            }
        })
    .catch((err) => console.error(err));}, []);

    return(
        <FadeInSection className="Projects Sec" >
            <div className="anchor" id="Projects"/>
            <h1> Projects: </h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.key} className="project">
                        <h2>{project.name}</h2>
                    </div>
                ))}
            </div>
        </FadeInSection>
    );
}