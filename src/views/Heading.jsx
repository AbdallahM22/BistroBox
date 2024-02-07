import styles from "./Heading.module.css";

const Heading = ({ children, variant = "h2" }) => {
  // variant = "h1"
  // let head =
  //   variant === "h1" ? styles.h1 : variant === "h3" ? styles.h3 : styles.h2;
  return <h2 className={`${styles.heading} ${variant}`}>{children}</h2>;
};

export default Heading;
