'use client';

import React, {useState, useEffect, useRef} from 'react';
import styles from '../../css/Achievement.module.css';

export type AchievementType = {
    onShow: () => boolean;
    title?: string;
    description?: string;
    imageSource?: string;
    // duration of achievement in ms
    duration?: number;
}


const Achievement = ({title = "Achievement unlocked!", description, onShow, duration = 6000, imageSource}: AchievementType) => {
    const [showAchievement, setShowAchievement] = useState(false);
    const wasAchievementShown = useRef(false);
    useEffect(() => {
        const handleShow = () => {
            if (
                onShow() && !wasAchievementShown.current
            ) {
                setShowAchievement(true);
                wasAchievementShown.current = true;
                setTimeout(() => {
                    setShowAchievement(false);
                }, duration); // 6 seconds
            }
        };


    }, []);

    return (
        <div className="flex">
            <div
                className={`${styles['achievement-container']} ${(showAchievement) ? (styles['translate-up']) : ('')}`}
                id={styles.achievement}
            >
                <div className={styles['achievement-icon']}>
                    <img
                        src={imageSource}
                        alt="Achievement image"
                    />
                </div>
                <div className={styles['achievement-label']}>{title}</div>
                <div className={styles['achievement-text']}>{description}</div>
            </div>
        </div>
    );
};

export default Achievement;