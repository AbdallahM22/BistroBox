import styles from "./HomePage.module.css";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import OurMenu from "../components/OurMenu/OurMenu";
import Info from "../components/Info/Info";
import Contact from "../components/Contact/Contact";
import Location from "../components/Location/Location";
import Faqs from "../views/Faqs";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Home />
      <About />
      <OurMenu />
      <Info />
      <Contact />
      <Location />
      <Faqs />
    </div>
  );
};

export default HomePage;
