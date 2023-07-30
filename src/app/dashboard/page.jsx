"use client"
import React from 'react'
import { redirect } from 'next/navigation'
import styles from './dashboard.module.css'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const session = useSession()
  console.log(session)
  if (session.status === 'unauthenticated') {
    redirect('/dashboard/login')
  }
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard