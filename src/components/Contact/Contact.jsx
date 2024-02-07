import styles from "./Contact.module.css";
import Heading from "../../views/Heading";
import Form from "../../views/Form";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <div className={styles.image}>
              <img src="talk.svg" alt="" />
            </div>
            <div className={styles["contact-info"]}>
              <Heading>send us you request</Heading>
              <h4 className="card-title">Reach us now</h4>
              <ul>
                <li className="body-text">
                  <img src="phone.svg" alt="" />
                  +20222735-6695 - +20105051777
                </li>
                <li className="body-text">
                  <img src="map-pin.svg" alt="" />
                  A1 - El Adel Abu Bakr Squar, Zamalek - Cairo, Egypt
                </li>
              </ul>
            </div>
            <div className={styles.arrow}>
              <img src="yellow-arrow.svg" alt="" />
            </div>
          </div>
          <Form />
        </div>
        <div className={styles["form-shape"]}>
          <img src="form-shape.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
