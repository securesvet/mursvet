'use client';

import React, {useEffect, useRef} from 'react';
import styles from '@/components/css/HyperCard.module.css';

const HyperCard = () => {
    const cardsReferences = useRef<HTMLDivElement[]>([]);
    const props = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello']
    useEffect(() => {
        for (let i = 0; i < props.length; i++) {
            cardsReferences.current[i].onmousemove = e => {
                const rect = cardsReferences.current[i].getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                cardsReferences.current[i].style.setProperty("--mouse-x", `${x}px`);
                cardsReferences.current[i].style.setProperty("--mouse-y", `${y}px`);
            }
        }
    }, []);


    return (
        <div id={styles.cards}>
            {props.map((el, index) => (
                    <div key={index} ref={el => cardsReferences.current[index] = el} className={styles.card}>
                        <div className={styles['card-image']}></div>
                        <div className={styles["card-info-wrapper"]}>
                            <div className={styles["card-info"]}>
                                <i className="fa-duotone fa-apartment"></i>
                                <div className={styles["card-info-title"]}>
                                    <h3 className="text-[#f0f0f0]">Whatever</h3>
                                    <p>Places to be apart. Wait, what?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )
            }
        </div>
    );
};

export default HyperCard;