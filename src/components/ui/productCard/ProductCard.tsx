"use client";
import { useRouter } from "next/navigation";
import sass from "./ProductCard.module.scss";
import cardImg from "./../../../assets/image/product.png";
import Image from "next/image";
import Button from "../button/Button";
import Form from "@/components/page/form/Form";
interface Product {
  id: number;
  name: string;
  price: string;
  img?: string;
  brand: string;
  waveHeight: number;
  stepHeight: number;
  options: {
    color: string[];
    thickness: string[];
    surface: string[];
  };
}
interface ProductCardProps {
  el: Product;
}

const ProductCard = ({ el }: ProductCardProps) => {
  const router = useRouter();

  return (
    <div className={sass.card}>
      <Image
        src={el.img || cardImg}
        alt={el.name}
        className={sass.img}
        width={300}
        height={200}
      />
      <h3 className={sass.name}>{el.name}</h3>
      <div className={sass.info}>
        <div className={sass.row}>
          <span>Бренд</span>
          <span>{el.brand}</span>
        </div>
        <div className={sass.row}>
          <span>Высота волны, мм</span>
          <span>{el.waveHeight}</span>
        </div>
        <div className={sass.row}>
          <span>Высота ступеньки, мм</span>
          <span>{el.stepHeight}</span>
        </div>
      </div>
      <p className={sass.price}>
        <span>от </span> {el.price} ₽ / м²
      </p>
      <div className={sass.selects}>
        <label className={sass.label}>
          Цвет
          <select className={sass.select}>
            {el.options.color.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </label>

        <label className={sass.label}>
          Толщина
          <select className={sass.select}>
            {el.options.thickness.map((t, i) => (
              <option key={i}>{t}</option>
            ))}
          </select>
        </label>

        <label className={sass.label}>
          Поверхность
          <select className={sass.select}>
            {el.options.surface.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <div className={sass.actions}>
        <Form
          title="Металлочерепица Classic"
          subtitle="Оставьте ваш номер телефона и мы перезвоним вам в ближайшее время для расчета стоимости кровли"
          trigger={<Button>Рассчитать стоимость</Button>}
        />
        <Button
          variant="secondary"
          onClick={() => router.push(`/productId/${el.id}`)}
        >
          Подробнее о товаре
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
