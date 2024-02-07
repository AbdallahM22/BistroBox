import styles from "./Rotational.module.css";
const TEXT =
  "egypt's first fresh food atm · egypt's first fresh food atm · egypt's first fresh food atm · egypt's first fresh food atm · egypt's first fresh food atm · ";

const Rotational = () => {
  return (
    <div className={[styles.circle]}>
      <div className={[styles.text]}>
        <p>
          {TEXT.split("").map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 2.3}deg)` }}>
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Rotational;
