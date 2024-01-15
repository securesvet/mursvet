import React from 'react';
import styles from '@/components/css/ShapeShift.module.css'

const ShapeShift = () => {
    return (
        <div id={styles.wrapper} data-roundness="1" data-configuration="1">
            <div className={styles.shape}></div>
            <div className={styles.shape}></div>

        </div>
    );
};

export default ShapeShift;