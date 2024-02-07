import React from "react";
import styles from "./Product.module.css";
const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <p className={styles["prod-name"]}>{product.name}</p>
      </div>
    </div>
  );
};

export default Product;
