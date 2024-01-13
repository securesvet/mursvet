import React from 'react';
import styles from '../css/GlowingCards.module.css';
const GlowingCards = () => {
    return (
        <div className={styles.table}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
    );
};

export default GlowingCards;