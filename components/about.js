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
                    <h3>About me</h3>
                    <p className={styles.bio}>
                        I am a junior Full-Stack Developer from Spain, currently
                        living in Germany. I have a background in classical
                        music and language teaching and I am always ready to
                        learn new things. <br />
                        <br />I discovered Web Development while working as an
                        online teacher during the pandemic. When things got a
                        bit normal again and having already studied a few months
                        by myself, I decided to enroll in a Full-Stack
                        Web Developement Bootcamp. It was a very intense learning
                        experience and now I am excited to start my career in
                        the Technology field. <br />
                        <br />
                        Feel free to have a look at my projects, access my
                        Linkedin or Instagram profiles or write me in the
                        contact section.
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
