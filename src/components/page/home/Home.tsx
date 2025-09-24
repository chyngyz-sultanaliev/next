import sass from "./Home.module.scss";
import Welcome from "./welcome/Welcome";

const Home = () => {
  return (
    <div className={sass.home}>
      <Welcome />
    </div>
  );
};

export default Home;
