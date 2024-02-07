import styles from "./Form.module.css";
import RotationalText from "./RotationalText";

const Form = () => {
  return (
    <div className={styles.form}>
      <form action="">
        <div className={styles["form-elements"]}>
          <div className={styles["form-element"]}>
            <input type="text" name="name" id="" placeholder="Name *" />
          </div>
          <div className={styles["form-element"]}>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email address *"
            />
          </div>
          <div className={styles["form-element"]}>
            <textarea name="message" id="" placeholder="Message"></textarea>
          </div>
        </div>
      </form>
      <button>
        Let&apos;s connect!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={5.5}
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className={styles.rotational}>
        <RotationalText />
      </div>
    </div>
  );
};

export default Form;
