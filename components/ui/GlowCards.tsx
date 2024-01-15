'use client';

import React, {useState} from 'react';
import styles from "@/components/css/GlowCards.module.css";

const usePointerGlow = () => {
    const [status, setStatus] = useState(null)
    React.useEffect(() => {
        // @ts-ignore
        const syncPointer = ({x: pointerX, y: pointerY}) => {
            const x = pointerX.toFixed(2)
            const y = pointerY.toFixed(2)
            const xp = (pointerX / window.innerWidth).toFixed(2)
            const yp = (pointerY / window.innerHeight).toFixed(2)
            document.documentElement.style.setProperty('--x', x)
            document.documentElement.style.setProperty('--xp', xp)
            document.documentElement.style.setProperty('--y', y)
            document.documentElement.style.setProperty('--yp', yp)
            //@ts-ignore
            setStatus({x, y, xp, yp})
        }
        const syncTouch = (event: TouchEvent) => {
            const pointerX = event.touches[0].clientX
            const pointerY = event.touches[0].clientY
            const x = pointerX.toFixed(2)
            const y = pointerY.toFixed(2)
            const xp = (pointerX / window.innerWidth).toFixed(2)
            const yp = (pointerY / window.innerHeight).toFixed(2)
            document.documentElement.style.setProperty('--x', x)
            document.documentElement.style.setProperty('--xp', xp)
            document.documentElement.style.setProperty('--y', y)
            document.documentElement.style.setProperty('--yp', yp)
            // @ts-ignore
            setStatus({x, y, xp, yp})
        }

        document.body.addEventListener('pointermove', syncPointer)
        document.body.addEventListener('touchmove', syncTouch)

        return () => {
            document.body.removeEventListener('pointermove', syncPointer)
            document.body.removeEventListener('touchmove', syncTouch)
        }
    }, [])
    return [status]
}

const GlowCards = () => {
    const [status] = usePointerGlow();
    return (
        <main className={styles.main}>
            <article className={`${styles.card} ${styles['data-glow']}`}>
                <span className={`${styles['span-card']} ${styles['data-glow']}`}/>
                <button className={`${styles['button-card']} ${styles['data-glow']}`}>
                    <span>Glow Up</span>
                </button>
            </article>
            <article className={`${styles.card} ${styles['data-glow']}`}>
                <span className={`${styles['span-card']} ${styles['data-glow']}`}/>
                <button className={`${styles['button-card']} ${styles['data-glow']}`}>
                    <span>Glow Up</span>
                </button>
            </article>
            <article className={`${styles.card} ${styles['data-glow']}`}>
                <span className={`${styles['span-card']} ${styles['data-glow']}`}/>
                <button className={`${styles['button-card']} ${styles['data-glow']}`}>
                    <span>Glow Up</span>
                </button>
            </article>
        </main>
    )
};

export default GlowCards;