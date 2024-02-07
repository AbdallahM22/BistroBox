import { useState } from "react";
import styles from "./Faq.module.css";

const Faq = ({ question, answer, initialState = "closed" }) => {
  const [open, setOpen] = useState(() => {
    return initialState == "closed" ? false : true;
  });
  const toggleHandler = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className={styles.faq}>
      <div className={styles.content}>
        <div className={styles.question}>
          <h2 className="body-text">{question}</h2>
          <div className={styles.toggle} onClick={toggleHandler}>
            {!open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#61b4a9"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#61b4a9"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            )}

            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#61b4a9" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg> */}
          </div>
        </div>
        {open && <p className={styles.answer}>{answer}</p>}
        {/* <p className={`${styles.answer} ${open ? styles.open : ""}`}>
          {answer}
        </p> */}
      </div>
    </div>
  );
};

export default Faq;
