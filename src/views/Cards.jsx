import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card>mission</Card>
      <Card variant="secondary">vision</Card>
    </div>
  );
};

export default Cards;
