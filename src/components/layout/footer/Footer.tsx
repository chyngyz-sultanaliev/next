"use client";
import React from "react";
import Image from "next/image";
import Logo from "./../../../assets/image/logo.png";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { FaTelegramPlane, FaVk, FaWhatsapp } from "react-icons/fa";
import sass from "./Footer.module.scss";
import Form from "@/components/page/form/Form";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={sass.footer}>
      <div className="container">
        <div className={sass.footer_nav}>
          <Link href={"/"}>
            <Image src={Logo} width={90} height={80} alt="logo.png" />
          </Link>
          <div className={sass.footer_pdf}>
            <Form
              title="Скачать прайс-лист"
              subtitle="Введите ваше имя, номер телефона и нажмите на кнопку «Скачать прайс-лист». После чего, начнется скачивание файла"
              fileUrl="/assets/files/pricelist.pdf"
              trigger={
                <Icon
                  href="/#"
                  colorText={false}
                  text="PDF"
                  bgType="radial"
                  icon={undefined}
                />
              }
            />
            Скачать прайс-лист
          </div>
          <Button href="/product">Посмотреть каталог товаров</Button>
          <div className={sass.footer_icons}>
            <p>
              <span></span>Задайте вопрос online
            </p>
            <div className={sass.footer_icon}>
              <Form
                title="Мы свяжемся с Вами по WhatsApp"
                subtitle="Оставьте ваш номер телефона и мы свяжемся с Вами в WhatsApp в ближайшее время"
                trigger={
                  <Icon
                    href="/#"
                    icon={<FaWhatsapp />}
                    roundIcon={false}
                    bgType="greenLinear"
                    shape="rectangular"
                  />
                }
              />

              <Form
                title="Мы свяжемся с Вами по Telegram"
                subtitle="Оставьте ваш номер телефона и мы свяжемся с Вами в Telegram в ближайшее время"
                trigger={
                  <Icon
                    href="/#"
                    icon={<FaTelegramPlane />}
                    roundIcon={false}
                    bgType="linear"
                    shape="rectangular"
                  />
                }
              />
              <Form
                title="Мы свяжемся с Вами в ВКонтакте"
                subtitle="Оставьте ваш номер телефона и мы свяжемся с Вами в ВКонтакте в ближайшее время"
                trigger={
                  <Icon
                    href="/#"
                    icon={<FaVk />}
                    roundIcon={false}
                    bgType="solid"
                    shape="rectangular"
                  />
                }
              />
            </div>
          </div>
          <div className={sass.footer_contact}>
            <h2>+7 (812) 325-50-55</h2>
            <Form
              title="Мы перезвоним Вам"
              subtitle="Оставьте ваш номер телефона и мы перезвоним вам в ближайшее время"
              trigger={<h5>Перезвоним Вам</h5>}
            />
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
