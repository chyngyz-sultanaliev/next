import About from "./about/About";
import sass from "./Home.module.scss";
import Welcome from "./welcome/Welcome";

const Home = () => {
  return (
    <div className={sass.home}>
      <Welcome />
      <About />
    </div>
  );
};

export default Home;
