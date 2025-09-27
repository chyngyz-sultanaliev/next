"use client";
import React from "react";
import sass from "./Icon.module.scss";

interface IconButtonProps {
  href?: string; // можно оставить для атрибута, но переход отключён
  icon: React.ReactNode;
  click?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  text?: string;
  roundIcon?: boolean;
  colorText?: boolean;
  bgType?: "radial" | "linear" | "solid" | "greenLinear" | "transparent";
  shape?: "default" | "rectangular";
}

const Icon: React.FC<IconButtonProps> = ({
  href = "/#",
  icon,
  text,
  colorText = true,
  roundIcon = true,
  click,
  bgType = "radial",
  shape = "default",
}) => {
  const isIconOnly = !icon || !text;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    click && click(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${sass.button} ${sass[bgType]} 
        ${roundIcon ? sass.roundIcon : sass.br12}
        ${isIconOnly ? sass.iconOnly : sass.iconWithText} 
        ${colorText ? sass.white : sass.black} 
        ${shape === "rectangular" ? sass.rectangular : ""}`}
    >
      {icon && <span className={sass.icon}>{icon}</span>}
      {text && <span className={sass.text}>{text}</span>}
    </a>
  );
};

export default Icon;
