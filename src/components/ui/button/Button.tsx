"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string; // путь для перехода
}

const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      router.push(href);
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button className={styles.button} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
