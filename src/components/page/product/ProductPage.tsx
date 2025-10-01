import Questions from "../home/questions/Questions";
import Reviews from "../home/reviews/Reviews";
import Quiz from "../quiz/Quiz";
import Product from "./Product";

const ProductPage = () => {
  return (
    <>
      <Product />
      <Quiz />
      <Questions />
      <Reviews />
    </>
  );
};

export default ProductPage;
