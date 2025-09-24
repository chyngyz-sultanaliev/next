"use client";
import { useRouter } from "next/navigation";
import sass from "./ProductCard.module.scss";

interface Product {
  name: string;
  id: number;
}
interface ProductCardProps {
  el: Product;
}
const ProductCard = ({ el }: ProductCardProps) => {
  const nav = useRouter();
  return (
    <div onClick={() => nav.push(`/productId/${el.id}`)} className={sass.card}>
      {el.name}
    </div>
  );
};

export default ProductCard;
