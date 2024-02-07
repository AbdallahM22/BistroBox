import Card from "../../views/Card";
import SmallHeading from "../../views/SmallHeading";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <SmallHeading>About Us</SmallHeading>
        <div className={styles.content}>
          <div className={styles.text}>
            <div>Technology</div>
            <div>Convenience</div>
            <div>freshness</div>
          </div>
          <div className={styles["first-card"]}>
            <Card>mission</Card>
          </div>
          <div className={styles["second-card"]}>
            <Card variant="secondary">vision</Card>
          </div>
          {/* </div> */}
          <div className={styles.info}>
            <p className="body-text">
              Bistro Box is powered by smart eats, A food-tech solution provider
              that offers a variety of smart kiosks for diverse food and
              beverage products based on market needs such as sandwiches, salads
              , fresh juice, coffee, and more.
            </p>
            <div className={styles.btn}>
              <span className="btn">Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.fresh}>
          <img src="fresh.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
