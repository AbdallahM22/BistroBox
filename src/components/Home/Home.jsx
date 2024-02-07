import styles from "./Home.module.css";
import Rectangle from "../../views/Rectangle";
import Heading from "../../views/Heading";
import Button from "../../views/Button";
import Rotational from "../../views/Rotational";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles["home-container"]}>
          <div className={styles["home-text"]}>
            <Rectangle />
            <Heading variant="h1">
              a grab-and-go solution that offers quality food
            </Heading>
            <p className="body-text">
              Making it easy for everyone to eat well at any time of the day. A
              food-tech solution provider that offers a variety of smart kiosks
              for diverse food and beverage products based on market needs such
              as sandwiches, salads , fresh juice, coffee, and more.
            </p>
            <Button>Let&apos;s Collaborate</Button>
          </div>
          <div className={styles.image}>
            <img src="BistroBoxCompanyProfile.png" alt="" />
            <div>
              <Rotational />
            </div>
          </div>
          <div className={styles.arrow}>
            <img src="arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
