"use client";
import { useState } from "react";
import ProductCard from "@/components/ui/productCard/ProductCard";
import sass from "./Product.module.scss";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { CiCalculator2 } from "react-icons/ci";
import { IoMdPaper } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";

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

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("Все материалы");

  const filteredCategories =
    activeFilter === "Все материалы"
      ? data.categories
      : data.categories.filter((cat) => cat.filter === activeFilter);

  return (
      <section className={sass.product}>
        <div className="container">
          <h1 className={sass.title}>КАТАЛОГ ТОВАРОВ</h1>
          <div className={sass.filters}>
            {data.filters.map((filter, i) => (
              <Button
                key={i}
                variant={`${activeFilter === filter ? "primary" : "secondary"}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
          {filteredCategories.map((cat, i) => (
            <div key={i} className={sass.category}>
              <h2 className={sass.categoryTitle}>{cat.title}</h2>
              <div className={sass.grid}>
                {cat.products.map((item) => (
                  <ProductCard key={item.id} el={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={sass.product_icons}>
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
      </section>
  );
};

export default Product;
