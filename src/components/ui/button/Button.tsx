"use client";
import React from "react";
import { useRouter } from "next/navigation";
import sass from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      router.push(href);
    }
    if (props.onClick) props.onClick(e);
  };

  const className = `${sass.button} ${
    variant === "primary" ? sass.primary : sass.secondary
  }`;

  return (
    <button className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
