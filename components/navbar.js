import styles from "../styles/navbar.module.css";
import Link from "next/link";

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
            <Link href="https://neusgarcia-portfolio.s3.eu-central-1.amazonaws.com/Neus+Garcia+Puigdollers+CV.pdf">
                <a target="_blank" className={styles.button}>
                    <div>
                        <p className={styles.buttontext}>Download CV</p>
                    </div>
                </a>
            </Link>
        </div>
    );
}
