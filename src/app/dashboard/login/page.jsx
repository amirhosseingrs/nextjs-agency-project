"use client"
import React from 'react'
import styles from './login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
const Login = () => {
  const session = useSession()
  if (session.status === 'authenticated') redirect('/dashboard')
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} >
        <input type='email' placeholder="email" required />
        <input type='password' placeholder="password" required />
        <button type="submit">Login</button>
      </form>
      <Link href='/dashboard/register' >Create an account instead.</Link>
      <button className={styles.githubLogin} onClick={() =>  signIn('github')}> login with Github </button>
    </div>
  )
}

export default Login