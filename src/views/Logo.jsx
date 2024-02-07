import styles from "./Logo.module.css";
const Logo = ({ variant = "header" }) => {
  return (
    <div
      className={`${styles.logo} ${
        variant === "footer" ? styles.footer : styles.header
      }`}
    >
      <img src={`${variant === "header" ? "logo1.svg" : "logo2.svg"}`} alt="" />
      {/* <img src="logo2.svg" alt="" /> */}
    </div>
  );
};

export default Logo;
