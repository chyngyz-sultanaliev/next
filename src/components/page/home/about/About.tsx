import Icon from "@/components/ui/icon/Icon";
import sass from "./About.module.scss";
import { IoIosCheckboxOutline } from "react-icons/io";
import { PiCubeThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCreditCard2Front, BsHourglass } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
const About = () => {
  return (
    <section className={sass.about}>
      <div className="container">
        <div className={sass.about_content}>
          <div className={sass.about_title}>
            <h1>
              О НАС
              <br />и НАШЕМ БИЗНЕСЕ
            </h1>
            <p>
              Каждому клиенту мы гарантируем взаимовыгодные условия <br />{" "}
              сотрудничества. Мы дорожим своими заказчиками, поэтому <br /> брак
              и низкокачественный металл никогда не поступают на <br />
              склады предприятия. С нами – надежно, выгодно и <br /> безопасно!
            </p>
          </div>
          <div className={sass.about_cards}>
            <div className={sass.about_card}>
              <Icon icon={<IoIosCheckboxOutline />} roundIcon={false} />
              <h3>Постоянное наличие</h3>
              <p>
                Прямая работа с производителем обеспечивает постоянное наличие
                всех видом металлопроката
              </p>
            </div>
            <div className={sass.about_card}>
              <Icon icon={<PiCubeThin />} roundIcon={false} />
              <h3>Собственный автопарк</h3>
              <p>
                Автомобили грузоподъемностью от 1.5 до 20 тонн. Всегда быстрая
                доставка.
              </p>
            </div>
            <div className={sass.about_card}>
              <Icon icon={<CiDeliveryTruck />} roundIcon={false} />
              <h3>Объемы поставок</h3>
              <p>
                Собственная служба доставки, гаранатирует вам поставку
                материалов на объект в кратчайшие сроки.
              </p>
            </div>
            <div className={sass.about_card}>
              <Icon icon={<BsCreditCard2Front />} roundIcon={false} />
              <h3>Справедливая цена</h3>
              <p>
                Собственные ресурсы и транспорт позволяют снижать стоимость.
              </p>
            </div>
            <div className={sass.about_card}>
              <Icon icon={<BsHourglass />} roundIcon={false} />
              <h3>Обработка заявки {"<"} 30 минут</h3>
              <p>
                Отдел продаж, насчитывающий более 80 сотрудников, не оставит
                вашу заявку без внимания.
              </p>
            </div>
            <div className={sass.about_card}>
              <Icon icon={<LuUsers />} roundIcon={false} />
              <h3>Погрузка без очередей</h3>
              <p>
                Развитая складская логистика позволяет отгружать продукцию
                всегда без очередей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
