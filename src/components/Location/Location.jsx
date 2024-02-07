import LogosSwipper from "../../views/LogosSwipper";
import Heading from "../../views/Heading";
import Rectangle from "../../views/Rectangle";
import styles from "./Location.module.css";
import LogoMap from "../../views/LogoMap";
const Location = () => {
  return (
    <div className={styles.location}>
      <div className="container">
        <Rectangle />
        <Heading>where to find Bistro Box</Heading>
        <div className={styles.slider}>
          <LogosSwipper />
        </div>
        <div className={styles.map}>
          <div className={styles.image}>
            <img src="Basemap1.png" alt="" />
            <div className={styles.address}>
              <LogoMap />
            </div>
            <div className={styles.address}>
              <LogoMap />
            </div>
          </div>
          <div className={styles.image}>
            <img src="Basemap2.png" alt="" />
            <div className={styles.address}>
              <LogoMap />
            </div>
            <div className={styles.address}>
              <LogoMap />
            </div>
            <div className={styles.address}>
              <LogoMap />
            </div>
            <div className={styles.address}>
              <LogoMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
