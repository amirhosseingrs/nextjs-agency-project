"use client"
import React, { useContext } from "react";
import styles from "./darkmode.module.css";
import { ThemeContext } from "../../context/ThemeContext";
const DarkModeToggle = () => {
  const {toggle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball} onClick={toggle}
        style={mode === "light" ? { right: "4px" } : { left: "4px" }}
      />
    </div>
  );
};
export default DarkModeToggle;
