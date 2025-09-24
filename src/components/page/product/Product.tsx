import ProductCard from "@/components/ui/productCard/ProductCard";
import sass from "./Product.module.scss";

const Product = () => {
  const el = [
    {
      name: "chika",
      id: 1,
    },
    {
      name: "chika",
      id: 2,
    },
    {
      name: "chika",
      id: 3,
    },
    {
      name: "chika",
      id: 4,
    },
    {
      name: "chika",
      id: 5,
    },
    {
      name: "chika",
      id: 6,
    },
  ];
  return (
    <div className={sass.product}>
      {el.map((el, id) => (
        <ProductCard key={id} el={el} />
      ))}
    </div>
  );
};

export default Product;
