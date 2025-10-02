import Image from "next/image";
import sass from "./Questions.module.scss";
import img from "./../../../../assets/image/questions.png";
import Icon from "@/components/ui/icon/Icon";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Form from "../../form/Form";
import Button from "@/components/ui/button/Button";
const Questions = () => {
  return (
    <div className={sass.questions}>
      <div className="container">
        <Image src={img} width={460} height={460} alt="questions" />
        <div className={sass.questions_content}>
          <div className={sass.text}>
            <h1>ЕСТЬ ВОПРОСЫ?</h1>
            <p>
              Если у Вас есть вопросы или требуется помощь <br /> в подборе
              кровельных материалов, то оставьте свои <br /> данные, мы свяжемся
              с Вами и проконсультируем.
            </p>
            <Form
              title="Получить консультацию"
              subtitle="Оставьте ваш номер телефона и мы перезвоним вам в ближайшее время"
              trigger={<Button>Получить консультацию</Button>}
            />
            <div className={sass.icon}>
              <p>
                или напишите <br /> нам в мессенджер
              </p>
              <Form
                title="Мы свяжемся с Вами по WhatsApp"
                subtitle="Оставьте ваш номер телефона и мы свяжемся с Вами в WhatsApp в ближайшее время"
                trigger={<Icon icon={<FaWhatsapp />} bgType="transparent" />}
              />
              <Form
                title="Мы свяжемся с Вами по Telegram"
                subtitle="Оставьте ваш номер телефона и мы свяжемся с Вами в Telegram в ближайшее время"
                trigger={
                  <Icon icon={<FaTelegramPlane />} bgType="transparent" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
