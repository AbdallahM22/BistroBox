import Heading from "../../views/Heading";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.title}>
        We offer fresh, delicious food and beverages in less than 2 minutes,
        24/7.
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <div>
            <div className={styles.icon}>
              <img src="eat.svg" alt="" />
            </div>
            <Heading variant="h3">Grab N&#x2019; Go concept</Heading>
            <p className="body-text">
              o parking hassle, no queues, no interactions, no wait.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <img src="orange.png" alt="" />
        </div>
        <div className={styles.box}>
          <div>
            <div className={styles.icon}>
              <img src="time.svg" alt="" />
            </div>
            <Heading variant="h3">WE are a few steps away AWAY</Heading>
            <p className="body-text">From any consumer</p>
          </div>
        </div>
        <div className={styles.box}>
          <img src="juice.png" alt="" />
        </div>
        <div className={styles.box}>
          <div>
            <div className={styles.icon}>
              <img src="drink.svg" alt="" />
            </div>
            <Heading variant="h3">Self serve</Heading>
            <p className="body-text">
              user friendly, interactive, digital buying experience.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <img src="crease.png" alt="" />
        </div>
        <div className={styles.box}>
          <img src="Rectangle.png" alt="" />
          <div className={styles.play}>
            <img src="play.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
