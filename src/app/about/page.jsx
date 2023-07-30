import React from 'react'
import styles from './about.module.css'
import Image from 'next/image';
import Back from 'public/about.jpg'


export const metadata = {
    title : 'About',
    description : 'this is the description'
}


const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image className={styles.back} src={Back} alt='about us backgorund image' />
                <div className={styles.headerText}>
                    <h1>Digital storytellers</h1>
                    <p>handcrafting award winning digital exprience</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <h1>Who are we?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error velit, minus natus est iure laudantium facere nemo quis laborum consectetur sunt voluptate voluptates labore nihil molestiae voluptatem exercitationem delectus praesentium in. Quae odit minima placeat blanditiis unde voluptatum velit quidem earum delectus asperiores tempore ab ipsum maxime quo sunt quisquam, dolorem suscipit pariatur magnam qui exercitationem. Ea, magni! Itaque nam reiciendis in neque, quidem nemo aperiam quod facere. Harum ullam adipisci similique animi numquam dicta, fugit aliquid quasi eum sunt provident eaque cumque aspernatur eveniet! Veniam libero magnam obcaecati nemo ducimus, reprehenderit reiciendis pariatur consequuntur quaerat veritatis, temporibus voluptates asperiores.</p>
                </div>
                <div className={styles.item}>
                    <h1>What we do?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error velit, minus natus est iure laudantium facere nemo quis laborum consectetur sunt voluptate voluptates labore nihil molestiae voluptatem exercitationem delectus praesentium in. Quae odit minima placeat blanditiis unde voluptatum velit quidem earum delectus asperiores tempore ab ipsum maxime quo sunt quisquam, dolorem suscipit pariatur magnam qui exercitationem. Ea, magni! Itaque nam reiciendis in neque, quidem nemo aperiam quod facere. Harum ullam adipisci similique animi numquam dicta, fugit aliquid quasi eum sunt provident eaque cumque aspernatur eveniet! Veniam libero magnam obcaecati nemo ducimus, reprehenderit reiciendis pariatur consequuntur quaerat veritatis, temporibus -</p>
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    )
}
export default About;