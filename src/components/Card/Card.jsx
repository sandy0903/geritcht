import React from 'react'
import styles from './Card.module.css'
const Card = (props) => {
    const {image,date,topic,role,title,desc}=props
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={image} alt="cardImage" />
                <div className={styles.cardDate}>
                    <p>{date}</p>
                </div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardTopic}>
                    <p>{topic}/{role}</p>
                </div>
                <div className={styles.cardTitle}>
                    <p>{title}</p>
                </div>
                <div className={styles.cardDesc}>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
