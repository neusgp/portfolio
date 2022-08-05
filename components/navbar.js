import styles from "../styles/navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.menu}>
                <a href="#about" className={styles.link}>
                    About
                </a>

                <a href="#projects" className={styles.link}>
                    Projects
                </a>

                <a href="#contact" className={styles.link}>
                    Contact
                </a>
            </div>
            <div className={styles.button}>
                <p className={styles.buttontext}>Download CV</p>
            </div>
        </div>
    );
}
