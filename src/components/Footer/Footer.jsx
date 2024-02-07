import styles from "./Footer.module.css";
import Logo from "../../views/Logo";

const Footer = ({ menu = false }) => {
  return (
    <div className={styles.footer}>
      <section>
        <div className="container">
          <main style={{ backgroundColor: menu ? "" : "#61b4a9" }}>
            {!menu && <Logo variant="footer" />}
            <ul className={styles["big-menu"]}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Our Menu</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
            <ul className={styles.social}>
              <li>
                <a href="#">
                  <img src="insta.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="face.svg" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="twitter.svg" alt="twitter" />
                </a>
              </li>
            </ul>
          </main>
        </div>
      </section>
      <div className={styles.text}>
        <div className="container">
          <div>All Rights Reserved BistroBox 2020.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
