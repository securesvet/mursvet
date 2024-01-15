import React from 'react';
import styles from '@/components/css/GradientText.module.css'

const GradientText = ({children, className, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={`${styles.magic} ${className}`} {...props}>
            {children}
        </p>
    );
};

export default GradientText;