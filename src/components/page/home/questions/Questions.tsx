import Image from "next/image";
import sass from "./Questions.module.scss";
import img from "./../../../../assets/image/questions.png";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
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
            <Button>Получить консультацию</Button>
            <div className={sass.icon}>
              <p>
                или напишите <br /> нам в мессенджер
              </p>
              <Icon icon={<FaWhatsapp />} bgType="transparent" />
              <Icon icon={<FaTelegramPlane />} bgType="transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
