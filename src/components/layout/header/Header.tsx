"use client";
import React from "react";
import sass from "./Header.module.scss";
import Image from "next/image";
import Logo from "./../../../assets/image/logo.png";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { FaTelegramPlane, FaVk, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  return (
    <header className={sass.header}>
      <div className="container">
        <div className={sass.header_nav}>
          <div className={sass.header_logo}>
           <Link href={"/"}>
            <Image src={Logo} width={70} height={60} alt="logo.png" /></Link>
            <div className={sass.header_divider}></div>
            <span>
              Санкт-Петербург, <br /> Горелово, <br />
              Волхонское шоссе, 6
            </span>
          </div>
          <div className={sass.header_pdf}>
            <Icon
              href="/#"
              colorText={false}
              text="PDF"
              bgType="radial"
              icon={undefined}
            />
            Скачать прайс-лист
          </div>
          <Button href="/product">Посмотреть каталог товаров</Button>
          <div className={sass.header_icons}>
            <p>
              <span></span>Задайте вопрос online
            </p>
            <div className={sass.header_icon}>
              <Icon
                href="/#"
                icon={<FaWhatsapp />}
                roundIcon={false}
                bgType="greenLinear"
                shape="rectangular"
              />
              <Icon
                href="/#"
                icon={<FaTelegramPlane />}
                roundIcon={false}
                bgType="linear"
                shape="rectangular"
              />
              <Icon
                href="/#"
                icon={<FaVk />}
                roundIcon={false}
                bgType="solid"
                shape="rectangular"
              />
            </div>
          </div>
          <div className={sass.header_contact}>
            <h2>+7 (812) 325-50-55</h2>
            <span>Перезвоним Вам</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
