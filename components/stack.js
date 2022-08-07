/* eslint-disable @next/next/no-img-element */
import styles from "../styles/stack.module.css";

export default function Stack() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.title}>My current stack</h3>
            <div className={styles.list}>
                <div className={styles.group}>
                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        alt="html5 icon"
                    />

                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        alt="css icon"
                    />
                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt="js icon"
                    />
                </div>
                <div className={styles.group}>
                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="node icon"
                    />

                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
                        alt="postgresql icon"
                    />
                </div>
                <div className={styles.group}>
                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                        alt="vue icon"
                    />

                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt="react icon"
                    />
                </div>
                <div className={styles.group}>
                    <h4 className={styles.learning}>Learning...</h4>
                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                        alt="next icon"
                    />

                    <img
                        className={styles.icon}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        alt="typescript icon"
                    />
                </div>
            </div>
        </div>
    );
}
