'use client';

import React, {useState, useEffect, useRef} from 'react';
import styles from '../../css/Achievement.module.css';

interface IAchievement {
    title?: string;
    description?: string;
    onShow: () => boolean;
    // duration of achievement in ms
    duration?: number;
}

const Achievement = ({title = "Achievement unlocked!", description, onShow, duration=6000}: IAchievement) => {
    const [showAchievement, setShowAchievement] = useState(false);
    let wasAchievementShown = useRef(false);
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

        window.addEventListener('scroll', handleShow);

        return () => {
            window.removeEventListener('scroll', handleShow);
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
                        src="https://steamuserimages-a.akamaihd.net/ugc/576736399930252495/C071E065DFBE4DDD1F82AE7B9FE5FC979BED7FFD/"
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