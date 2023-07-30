import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import ContactImg from 'public/contact.png'
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Let's keep in touch</h1>
      <div className={styles.contact}>
        <div className={styles.side}>
          <Image width={500} src={ContactImg} alt='contact page image' />
        </div>
        <div className={styles.side}>
          <input type="text" placeholder='Name...' />
          <input type="text" placeholder='Email...' />
          <textarea name="message" placeholder='Message...' id="message" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact