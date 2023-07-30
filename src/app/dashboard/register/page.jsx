"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Register = () => {
  const session = useSession();
  if (session.status === "authenticated") redirect("/dashboard");

  const [err, setErr] = useState("");
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(res.status === 201);
      router.push("/dashboard/login");
    } catch (error) {
      setErr(error);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form className={styles.form} onSubmit={submitHandler} action="">
        <input type="text" placeholder="username" required />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        {err && `Error : ${err}`}
        <button type="submit">Register</button>
      </form>
      <Link href="/dashboard/login">Login with existing account.</Link>
    </div>
  );
};

export default Register;
