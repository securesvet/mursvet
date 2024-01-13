import React, {ReactNode} from 'react';
import styles from "../css/Underglow.module.css";

interface IUnderglow {
    props?: ReactNode;
    title?: ReactNode;
}

const Underglow = ({title, ...props}: IUnderglow) => {
    return (
        <div className={styles.bodyEmulation} {...props}>
            <div className={styles.box}>
                {title}
            </div>
        </div>
    );
};

export default Underglow;