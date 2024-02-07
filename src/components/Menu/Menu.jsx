import { createPortal } from "react-dom";
import styles from "./Menu.module.css";
import Button from "../../views/Button";
import Footer from "../Footer/Footer";

const Menu = ({ open }) => {
  return createPortal(
    // <div className="container">
    <div className={`${styles.content} ${open ? styles.open : ""}`}>
      <main>
        <div className={styles.temp}>
          <ul className={styles["menu-items"]}>
            <li className={styles["menu-item"]}>
              <a href="">Home</a>
            </li>
            <li className={styles["menu-item"]}>
              <a href="">Our menu</a>
            </li>
            <li className={styles["menu-item"]}>
              <a href="">About Us</a>
            </li>
            <li className={styles["menu-item"]}>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <Button>Let&apos;s Collaborate</Button>
        </div>
        <Footer menu={true} />
        {/* <section> */}
        {/* <button>Let&apos;s Collaborate</button> */}
        {/* <ul className={styles.social}>
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
            <footer>All Rights Reserved BistroBox 2020.</footer> */}
        {/* </section> */}
      </main>
    </div>,
    // </div>
    document.body
  );
};

export default Menu;
