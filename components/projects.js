/* eslint-disable @next/next/no-img-element */

import styles from "../styles/projects.module.css";

export default function Projects({ projects }) {
    console.log(projects);
    return (
        <div id="projects" className={styles.projects}>
            <h3>My Projects</h3>
            <p className={styles.intro}>
                Here you will find details about my recent projects. Go ahead
                and have a look at them!
            </p>
            <List projects={projects} />
        </div>
    );
}

function List({ projects }) {
    return (
        <div className={styles.list}>
            {projects.map((item) => {
                return (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.image}>
                            <img src={item.image} alt="project image" />
                        </div>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.tools}>{item.tools}</p>
                        <p className={styles.description}>{item.description}</p>
                        <a className={styles.url} href={item.url}>
                            Open App
                        </a>
                        <a className={styles.repo_url} href={item.repo_url}>
                            GitHub Repo
                        </a>
                    </div>
                );
            })}
        </div>
    );
}
