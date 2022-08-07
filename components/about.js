import styles from "../styles/about.module.css";
import Stack from "./stack";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import profile_pic from "../public/profile_pic.png";

export default function About() {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.content}>
                <div className={styles.profile_pic}>
                    <Image
                        src={profile_pic}
                        alt="Neus enjoying the sunset on the beach"
                    />
                </div>
                <div className={styles.text}>
                    <h3>Hola, Hello, Hallo, Ciao!</h3>
                    <p className={styles.bio}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <Link href="https://www.linkedin.com/in/neusgp/">
                        <a target="_blank">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className={styles.icon}
                            />
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/la_neuetes/">
                        <a target="_blank">
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faInstagram}
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <Stack />
        </div>
    );
}
