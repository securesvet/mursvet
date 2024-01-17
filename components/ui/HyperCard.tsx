'use client';

import React from 'react';
import styles from '@/components/css/HyperCard.module.css';

const HyperCard = () => {

    return (
        <div id={styles.cards}>
            <div className={styles.card}>
                <div className={styles['card-image']}></div>
                <div className={styles["card-info-wrapper"]}>
                    <div className={styles["card-info"]}>
                        <i className="fa-duotone fa-apartment"></i>
                        <div className={styles["card-info-title"]}>
                            <h3>Whatever</h3>
                            <h4>Places to be apart. Wait, what?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HyperCard;