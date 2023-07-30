import React from "react";
import styles from "./portfoio.module.css";
import Image from "next/image";
import Illustration from "public/illustration.png";
import Websites from "public/websites.jpg";
import Apps from "public/apps.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1>Our Works</h1>
      <h3>Choose a gallery</h3>
      <div className={styles.galleries}>
        <div className={styles.gallery}>
          <Link href="/portfolio/illustratioin">
            <Image width={350} src={Illustration} alt="a gallery" />
            <h1>Illustration</h1>
          </Link>
        </div>
        <div className={styles.gallery}>
          <Link href="/portfolio/websites">
            <Image width={350} src={Websites} alt="a gallery" />
            <h1>Websites</h1>
          </Link>
        </div>
        <div className={styles.gallery}>
          <Link href="/portfolio/apps">
            <Image width={350} src={Apps} alt="a gallery" />
            <h1>Apps</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
