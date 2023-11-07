import React from 'react'
import Input from "../../components/Input/Input"
import images from "../../constants/images"
import styles from "./Reservation.module.css"
import Button from '../../components/Button/Button'
const Reservation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.reservationForm}>
                <div className={styles.formHeader}>
                    <h3 className='p__cormorant'>Reservation</h3>
                    <img src={images.spoon} alt="spoon logo" />
                    <h1 className='subHeadtext__cormorant'>Book a Table</h1>
                </div>
                <div className={styles.formBody}>
                    <div className={styles.inputGroup}>
                        <Input defaultValue="1 person"/>
                        <Input defaultValue="12/05/2021"/>
                        <Input defaultValue="11:00AM"/>
                    </div>
                    <Button>Book Now</Button>
                </div>
            </div>

        </div>
    )
}

export default Reservation
