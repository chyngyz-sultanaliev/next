import Quiz from "../quiz/Quiz";
import About from "./about/About";
import sass from "./Home.module.scss";
import Questions from "./questions/Questions";
import Reviews from "./reviews/Reviews";
import Welcome from "./welcome/Welcome";

const Home = () => {
  return (
    <div className={sass.home}>
      <Welcome />
      <About />
      <Quiz />
      <Questions />
      <Reviews />
    </div>
  );
};

export default Home;
