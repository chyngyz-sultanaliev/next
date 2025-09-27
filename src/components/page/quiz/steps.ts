export type StepType = "options" | "input" | "radio";

export interface Step {
  id: number;
  title: string;
  type: StepType;
  question: string;
  help: string;
  options?: { label: string; img?: string }[];
  inputs?: { name: string; placeholder?: string }[];
}

export const steps: Step[] = [
  {
    id: 1,
    type: "options",
    title: "Вопрос 1 из 6",
    question: "Выберите тип Вашей крыши",
    help: "Выберите один из вариантов и переходите к следующему вопросу",
    options: [
      {
        label: "Односкатная",
        img: "https://www.docke.ru/upload/resized/articles_text/medialibrary/ca1/sioqxk3jvo458llji7486e9vhrupaq8f/image1_min_1000_1000.jpg",
      },
      {
        label: "Двухскатная",
        img: "https://www.docke.ru/upload/resized/articles_text/medialibrary/ca1/sioqxk3jvo458llji7486e9vhrupaq8f/image1_min_1000_1000.jpg",
      },
      {
        label: "Четырехскатная вальмовая",
        img: "https://www.docke.ru/upload/resized/articles_text/medialibrary/ca1/sioqxk3jvo458llji7486e9vhrupaq8f/image1_min_1000_1000.jpg",
      },
      {
        label: "Четырехскатная шатровая",
        img: "https://www.docke.ru/upload/resized/articles_text/medialibrary/ca1/sioqxk3jvo458llji7486e9vhrupaq8f/image1_min_1000_1000.jpg",
      },
      {
        label: "Мансардная ломанная",
        img: "https://www.docke.ru/upload/resized/articles_text/medialibrary/ca1/sioqxk3jvo458llji7486e9vhrupaq8f/image1_min_1000_1000.jpg",
      },
      {
        label: "Другая",
        img: "https://www.docke.ru/upload/resized/articles_text/medialibrary/ca1/sioqxk3jvo458llji7486e9vhrupaq8f/image1_min_1000_1000.jpg",
      },
    ],
  },
  {
    id: 2,
    type: "options",
    title: "Вопрос 2 из 6",
    question: "Выберите тип покрытия",
    help: "Выберите один из вариантов и переходите к следующему вопросу",
    options: [
      {
        label: "Металлочерепица",
        img: "https://storage.yandexcloud.net/sdvor-production-wiki-goods/media/701a0c85-ae8a-4038-a7af-e14672aa60ea.jpeg",
      },
      {
        label: "Профнастил",
        img: "https://storage.yandexcloud.net/sdvor-production-wiki-goods/media/701a0c85-ae8a-4038-a7af-e14672aa60ea.jpeg",
      },
      {
        label: "Фальцевая кровля",
        img: "https://storage.yandexcloud.net/sdvor-production-wiki-goods/media/701a0c85-ae8a-4038-a7af-e14672aa60ea.jpeg",
      },
    ],
  },
  {
    id: 3,
    type: "options",
    title: "Вопрос 3 из 6",
    question: "Выберите блеск поверхности",
    help: "Выберите один из вариантов и переходите к следующему вопросу",
    options: [
      {
        label: "Поверхность: Матовая",
        img: "https://www.poetalon.ru/upload/iblock/4df/zz2a4uh9k81gbsynkwlxrxael9wnqtdd/sovremennye_vidy_materialov_dlya_krovli_4.jpg",
      },
      {
        label: "Поверхность: Глянцевая",
        img: "https://www.poetalon.ru/upload/iblock/4df/zz2a4uh9k81gbsynkwlxrxael9wnqtdd/sovremennye_vidy_materialov_dlya_krovli_4.jpg",
      },
    ],
  },
  {
    id: 4,
    type: "options",
    title: "Вопрос 4 из 6",
    question: "Выберите толщину",
    help: "Выберите один из вариантов и переходите к следующему вопросу",
    options: [
      {
        label: "от 0,3 до 0,35  мм",
        img: "https://media.skyprofil.by/media/pages/2023/04/mceu_79851468811680530044926.webp",
      },
      {
        label: "от 0,4 до 0,45  мм",
        img: "https://media.skyprofil.by/media/pages/2023/04/mceu_79851468811680530044926.webp",
      },
      {
        label: "от 0,5 до 0,55  мм",
        img: "https://media.skyprofil.by/media/pages/2023/04/mceu_79851468811680530044926.webp",
      },
      {
        label: "0,7  мм",
        img: "https://media.skyprofil.by/media/pages/2023/04/mceu_79851468811680530044926.webp",
      },
      {
        label: "0,8  мм",
        img: "https://media.skyprofil.by/media/pages/2023/04/mceu_79851468811680530044926.webp",
      },
      {
        label: "0,9  мм",
        img: "https://media.skyprofil.by/media/pages/2023/04/mceu_79851468811680530044926.webp",
      },
    ],
  },
  {
    id: 5,
    type: "radio",
    title: "Вопрос 5 из 6",
    question: "Ориентировочная площадь Вашей кровли или площадь дома",
    help: "Введите площадь дома и переходите к следующему вопросу",
  },
  {
    id: 6,
    type: "options",
    title: "Вопрос 5 из 6",
    question: "Включаем в расчет доборные элементы кровли?",
    help: "Выберите один из вариантов и переходите к следующему вопросу",
    options: [
      {
        label: "Да, мне важно знать полную стоимость",
        img: "https://queentile.com/image/cache/catalog/formi-krish-i-ih-stropilnie-sistemi-1-1200x630.jpg",
      },
      {
        label: "Посчитайте только стоимость черепицы",
        img: "https://www.ruflex.ru/assets/images/images/folderS/keramicheskaya-krovlya.jpg",
      },
    ],
  },
  {
    id: 6,
    type: "input",
    title: "Готово.",
    question: " Ваши ответы получены и мы в ближайшее время свяжемся с вами!",
    help: "Введите номер телефона, чтобы Вы могли отправить расчет и связаться с вами.",
    inputs: [
      { name: "Name", placeholder: "Ваше имя" },
      { name: "Phone", placeholder: "+7 (999) 999-99-99" },
    ],
  },
];
