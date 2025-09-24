"use client";
import ProductId from "@/components/page/productId/ProductId";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  return <ProductId id={String(id)} />;
};

export default page;
