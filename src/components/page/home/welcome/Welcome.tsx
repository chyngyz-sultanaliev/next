import sass from "./Welcome.module.scss";
import image from "./../../../../assets/image/welcome.png";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { CiCalculator2 } from "react-icons/ci";
import { IoMdPaper } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Form from "../../form/Form";

const Welcome = () => {
  return (
    <div className={sass.welcome}>
      <div className="container">
        <div className={sass.welcome_content}>
          <h1>
            ПРОДАЖА кровельных <br />
            материалов c{" "}
            <span>
              доставкой <br /> по Санкт-Петербургу <br /> и области
            </span>{" "}
            в день заказа
          </h1>
          <p>
            За 1 минуту пройдите тест и{" "}
            <span>
              рассчитайте <br /> стоимость кровли
            </span>{" "}
            под ваш объект <br />с точностью 97% и получите подарки
          </p>
          <Form
            title="Металлочерепица Classic"
            subtitle="Оставьте ваш номер телефона и мы перезвоним вам в ближайшее время для расчета стоимости кровли"
            trigger={<Button>РАССЧИТАТЬ СТОИМОСТЬ МАТЕРИАЛОВ</Button>}
          />
        </div>
      </div>
      <div className={sass.welcome_icons}>
        <Icon
          href="/#"
          icon={<CiCalculator2 />}
          roundIcon={false}
          bgType="radial"
          text="Произвести   расчет"
        />
        <Icon
          href="/#"
          icon={<IoMdPaper />}
          roundIcon={false}
          bgType="radial"
          text="Произвести   расчет"
        />
        <Icon
          href="/#"
          icon={<FiPhoneCall />}
          roundIcon={false}
          bgType="radial"
          text="Произвести   расчет"
        />
      </div>
    </div>
  );
};

export default Welcome;
