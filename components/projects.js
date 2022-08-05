import styles from "../styles/projects.module.css";
import Image from "next/image";

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
                            <Image
                                /* src={item.image} */
                                alt="project image"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.tools}>{item.tools}</p>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
}
