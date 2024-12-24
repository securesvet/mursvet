import React from "react";
import styles from "@/components/css/GradientText.module.css";

type GradientTextType = React.HTMLAttributes<HTMLParagraphElement> & {
  animate?: boolean;
};

const GradientText = (
  { children, className, animate = true, ...props }: GradientTextType,
) => {
  return (
    <p
      className={`${styles.magic} ${
        animate ? styles.animated : ("")
      } ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default GradientText;
