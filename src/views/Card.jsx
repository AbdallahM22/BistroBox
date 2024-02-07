import styles from "./Card.module.css";

const Card = ({ children, variant = "primary" }) => {
  return (
    <div
      className={`${styles.card} ${
        variant == "primary" ? styles.primary : styles.secondary
      }`}
    >
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="white"
          //   className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <span className={`${styles.text} h2`}>{children}</span>
    </div>
  );
};

export default Card;