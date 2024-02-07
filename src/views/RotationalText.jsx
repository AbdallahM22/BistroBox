import styles from "./RotationalText.module.css";

const TEXT = "Get in touch & let's make something";
const RotationalText = () => {
  return (
    <div className={[styles.circle]}>
      <div className={[styles.text]}>
        <p>
          {TEXT.split("").map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 9.8}deg)` }}>
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default RotationalText;
