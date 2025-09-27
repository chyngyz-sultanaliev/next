"use client";
import { useState } from "react";
import Image from "next/image";
import sass from "./Reviews.module.scss";
import img from "./../../../../assets/icon/logo.jpg";
import Icon from "@/components/ui/icon/Icon";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviewsData = [
    {
      id: 1,
      name: "Serg",
      date: "27.07.2022",
      text: "Долго думал где покупать арматуру на фундамент, по рекомендации друзей заказывал на этой металлобазе. Менеджер Дмитрий все четко посчитал, цена меня устроила. Доставка была в срок. Буду и дальше с ним работать.",
    },
    {
      id: 2,
      name: "Квартира дом",
      date: "21.01.2022",
      text: "Рекомендую! Прекрасная компания. Обращаюсь не в первый раз. Менеджеры клиентоориентированы. Приятно, когда тебя и твои запросы понимают. Всегда гуманные цены. Профлист качественный, снегозадержатели супер. Спасибо!",
    },
    {
      id: 3,
      name: "Вячеслав Е",
      date: "10.12.2022",
      text: "Все чётко. Приняли заказ по телефону, пока ехал подготовили все документы отправили на wats app точку чтобы не заблудился. Приехал, оплатил, забрал 10 минут максимум.",
    },
    {
      id: 4,
      name: "Анна М",
      date: "15.03.2022",
      text: "Отличный сервис! Быстро подобрали нужный материал, проконсультировали по всем вопросам. Цены приемлемые, качество на высоте. Рекомендую!",
    },
    {
      id: 5,
      name: "Михаил К",
      date: "08.05.2022",
      text: "Заказывал профнастил для крыши. Все сделали быстро и качественно. Доставили точно в срок. Буду обращаться еще.",
    },
    {
      id: 6,
      name: "Елена С",
      date: "22.06.2022",
      text: "Очень довольна сотрудничеством! Менеджеры вежливые, профессиональные. Помогли с выбором, все объяснили. Спасибо за отличную работу!",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviewsData.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(reviewsData.length / 3)) %
        Math.ceil(reviewsData.length / 3)
    );
  };

  const getCurrentReviews = () => {
    const start = currentSlide * 3;
    return reviewsData.slice(start, start + 3);
  };

  return (
    <div className={sass.reviews}>
      <div className="container">
        <h1>
          <span>ЛУЧШЕ ВСЕГО О НАС</span>
          <br />
          РАССКАЖУТ НАШИ КЛИЕНТЫ
        </h1>
        <div className={sass.btns}>
          <Icon icon={<FaArrowLeftLong />} click={prevSlide} />
          <Icon icon={<FaArrowRightLong />} click={nextSlide} />
        </div>
        <div className={sass.slider}>
          <div className={sass.cards}>
            {getCurrentReviews().map((review) => (
              <div key={review.id} className={sass.card}>
                <div className={sass.logo}>
                  <div className={sass.img}>
                    <Image src={img} width={60} height={60} alt="icon" />
                    <p>
                      {review.name} <br />
                      <span>{review.date}</span>
                    </p>
                  </div>
                  <h2>
                    <span className={sass.red}>Я</span>
                    <span className={sass.black}>ндекс</span> карты
                  </h2>
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={sass.dots}>
          {Array.from({ length: Math.ceil(reviewsData.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                className={`${sass.dot} ${
                  index === currentSlide ? sass.active : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
