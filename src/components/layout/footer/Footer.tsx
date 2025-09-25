"use client";
import React from "react";
import Image from "next/image";
import Logo from "./../../../assets/image/logo.png";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { FaTelegramPlane, FaVk, FaWhatsapp } from "react-icons/fa";
import sass from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={sass.footer}>
      <div className="container">
        <div className={sass.footer_nav}>
          <Image src={Logo} width={90} height={80} alt="logo.png" />
          <div className={sass.footer_pdf}>
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
          <div className={sass.footer_icons}>
            <p>
              <span></span>Задайте вопрос online
            </p>
            <div className={sass.footer_icon}>
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
          <div className={sass.footer_contact}>
            <h2 className={sass.gradientText}>+7 (812) 325-50-55</h2>
            <span>Перезвоним Вам</span>
          </div>
        </div>
        <h1>
          Политика конфиденциальности <br /> Copyright © 2010 - 2022 | ООО
          «СУПЕРМЕТ»
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
