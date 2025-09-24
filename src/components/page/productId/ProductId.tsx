import sass from "./ProductId.module.scss";
interface ProductIdProps {
  id: string;
}

const ProductId = ({ id }: ProductIdProps) => {
  return (
    <div className={sass.productId}>
      dsfhiosdfid
      {id}
    </div>
  );
};

export default ProductId;
