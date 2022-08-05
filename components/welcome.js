import styles from "../styles/welcome.module.css";
import Image from "next/image";

import welcome_image from "../public/welcome_image.png";

export default function Welcome() {
    return (
        <div className={styles.welcome}>
            <div className={styles.title}>
                <h1>Hi, I&apos;m Neus!</h1>
                <h2>Welcome to my Portfolio.</h2>
            </div>
            <div className={styles.image}>
                <Image
                    src={welcome_image}
                    alt="Neus building websites and learning to code"
                />
            </div>
        </div>
    );
}
