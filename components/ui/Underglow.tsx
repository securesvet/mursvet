import React, { ReactNode } from "react";
import styles from "../css/Underglow.module.css";

interface IUnderglow {
  props?: ReactNode;
  className?: string;
  children?: ReactNode;
}

const Underglow = ({ children, className, ...props }: IUnderglow) => {
  return (
    <div className={`${styles.bodyEmulation}`} {...props}>
      <div className={`${styles.box} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Underglow;
