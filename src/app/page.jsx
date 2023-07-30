import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1>Better Design for your digital products</h1>
        <p>
          Turning your ideas into reality. we bring together the teams from
          global tech industry.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image className={styles.image} src={Hero} alt="hero" />
      </div>
    </div>
  );
}
