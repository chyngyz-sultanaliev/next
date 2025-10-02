"use client";
import { useState } from "react";
import Image from "next/image";
import sass from "./ProductId.module.scss";
import Button from "@/components/ui/button/Button";
import cardImg from "@/assets/image/product.png";
import About from "../home/about/About";
import Questions from "../home/questions/Questions";
import Reviews from "../home/reviews/Reviews";
import Product from "../product/Product";
import Quiz from "../quiz/Quiz";
import Form from "../form/Form";

const data = {
  filters: [
    "Все материалы",
    "Металлочерепица",
    "Профнастил",
    "Фальцевая кровля",
  ],
  categories: [
    {
      title: "Металлочерепица",
      filter: "Металлочерепица",
      products: [
        {
          id: 1,
          name: "Металлочерепица Classic",
          price: "433",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Красный", "Зелёный", "Серый"],
            thickness: ["0.45", "0.5", "0.55"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 2,
          name: "Металлочерепица Kamea",
          price: "433",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Коричневый", "Чёрный"],
            thickness: ["0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 3,
          name: "Металлочерепица Classic",
          price: "433",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Красный", "Зелёный", "Серый"],
            thickness: ["0.45", "0.5", "0.55"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 4,
          name: "Металлочерепица Kamea",
          price: "433",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Коричневый", "Чёрный"],
            thickness: ["0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
      ],
    },
    {
      title: "Профнастил",
      filter: "Профнастил",
      products: [
        {
          id: 5,
          name: "Профнастил С8",
          price: "246",
          img: "",
          brand: "Grande Line",
          waveHeight: 12,
          stepHeight: 0.5,
          options: {
            color: ["Оцинкованный", "Белый", "Коричневый"],
            thickness: ["0.4", "0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 6,
          name: "Профнастил С10",
          price: "278",
          img: "",
          brand: "Grande Line",
          waveHeight: 12,
          stepHeight: 0.5,
          options: {
            color: ["Оцинкованный", "Серый"],
            thickness: ["0.4", "0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 7,
          name: "Профнастил С8",
          price: "246",
          img: "",
          brand: "Grande Line",
          waveHeight: 12,
          stepHeight: 0.5,
          options: {
            color: ["Оцинкованный", "Белый", "Коричневый"],
            thickness: ["0.4", "0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 8,
          name: "Профнастил С10",
          price: "278",
          img: "",
          brand: "Grande Line",
          waveHeight: 12,
          stepHeight: 0.5,
          options: {
            color: ["Оцинкованный", "Серый"],
            thickness: ["0.4", "0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
      ],
    },
    {
      title: "Фальцевая кровля",
      filter: "Фальцевая кровля",
      products: [
        {
          id: 9,
          name: "Кликфальц",
          price: "655",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Красный", "Серый"],
            thickness: ["0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 10,
          name: "Кликфальц Line",
          price: "690",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Чёрный", "Синий"],
            thickness: ["0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 11,
          name: "Кликфальц",
          price: "655",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Красный", "Серый"],
            thickness: ["0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
        {
          id: 12,
          name: "Кликфальц Line",
          price: "690",
          img: "",
          brand: "Grande Line",
          waveHeight: 6,
          stepHeight: 0.5,
          options: {
            color: ["Чёрный", "Синий"],
            thickness: ["0.45", "0.5"],
            surface: ["Глянец", "Матовый"],
          },
        },
      ],
    },
  ],
};

interface ProductIdProps {
  id: string;
}

const ProductId = ({ id }: ProductIdProps) => {
  const productId = Number(id);
  const [showForm, setShowForm] = useState(false);

  const product = data.categories
    .flatMap((cat) => cat.products)
    .find((p) => p.id === productId);

  if (!product) {
    return <div className={sass.productId}>Товар с ID {id} не найден</div>;
  }

  const [color, setColor] = useState(product.options.color[0] || "");
  const [thickness, setThickness] = useState(
    product.options.thickness[0] || ""
  );
  const [surface, setSurface] = useState(product.options.surface[0] || "");
  const [activeTab, setActiveTab] = useState("Характеристики");

  return (
    <>
      <div className={sass.productId}>
        <div className="container">
          <div className={sass.productId__card}>
            <div className={sass.wrapper}>
              <div className={sass.image}>
                <Image
                  src={product.img || cardImg}
                  alt={product.name}
                  width={500}
                  height={400}
                />
              </div>

              <div className={sass.content}>
                <h1 className={sass.title}>{product.name}</h1>

                <div className={sass.specs}>
                  <div className={sass.specItem}>
                    <span className={sass.specLabel}>Бренд</span>
                    <span className={sass.specValue}>{product.brand}</span>
                  </div>
                  <div className={sass.specItem}>
                    <span className={sass.specLabel}>Высота волны, мм</span>
                    <span className={sass.specValue}>{product.waveHeight}</span>
                  </div>
                  <div className={sass.specItem}>
                    <span className={sass.specLabel}>Высота ступеньки, мм</span>
                    <span className={sass.specValue}>{product.stepHeight}</span>
                  </div>
                </div>

                <p className={sass.price}>
                  <span>от </span> {product.price} ₽ / м²
                </p>

                <div className={sass.selects}>
                  <div className={sass.selectGroup}>
                    <label>Цвет</label>
                    <select
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {product.options.color.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={sass.selectGroup}>
                    <label>Толщина</label>
                    <select
                      value={thickness}
                      onChange={(e) => setThickness(e.target.value)}
                    >
                      {product.options.thickness.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={sass.selectGroup}>
                    <label>Поверхность</label>
                    <select
                      value={surface}
                      onChange={(e) => setSurface(e.target.value)}
                    >
                      {product.options.surface.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <Form
                  title="Металлочерепица Classic"
                  subtitle="Оставьте ваш номер телефона и мы перезвоним вам в ближайшее время для расчета стоимости кровли"
                  trigger={<Button>Рассчитать стоимость</Button>}
                />
              </div>
            </div>

            <div className={sass.infoSection}>
              <h2 className={sass.infoTitle}>
                Дополнительная информация о товаре
              </h2>

              <div className={sass.tabs}>
                {["Характеристики", "Описание", "Оплата", "Доставка"].map(
                  (tab) => (
                    <Button
                      key={tab}
                      variant="secondary"
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quiz />
      <About />
      <Product />
      <Questions />
      <Reviews />
    </>
  );
};

export default ProductId;
