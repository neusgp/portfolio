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
                        <img
                            className={styles.image}
                            src={item.image}
                            alt="project image"
                        />
                        <h4 className={styles.title}>{item.title}</h4>
                        <p className={styles.tools}>{item.tools}</p>
                        <p className={styles.description}>{item.description}</p>
                        <div className={styles.buttons}>
                            <a href={item.url}>
                                <button className={styles.app_button}>
                                    <p className={styles.url}>Open App</p>
                                </button>
                            </a>
                            <a href={item.repo_url}>
                                <button className={styles.repo_button}>
                                    <p className={styles.repo_url}>
                                        GitHub Repo
                                    </p>
                                </button>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
