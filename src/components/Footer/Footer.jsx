import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>2023 © Created with❤️by Amir</div>
      <div className={styles.footerSocial}>
        <Link href='https://facebook.com/'><Image width={25} height={25} src='/1.png' alt="social media link" /></Link> 
        <Link href='https://instagram.com/'><Image width={25} height={25} src='/2.png' alt="social media link" /></Link> 
        <Link href='https://twitter.com/'><Image width={25} height={25} src='/3.png' alt="social media link" /></Link> 
        <Link href='https://youtube.com/'><Image width={25} height={25} src='/4.png' alt="social media link" /></Link> 
      </div>
    </div>
  );
};
export default Footer;
