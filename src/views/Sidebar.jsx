import { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ filter, categories }) => {
  const [category, setCategory] = useState(categories[0].toLowerCase());

  const filterHandler = (category) => {
    setCategory(category);
    filter(category);
  };
  return (
    <div>
      <ul className={styles.sidebar}>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={(e) => {
              console.log(e.target.innerText);
              filterHandler(cat.toLowerCase());
            }}
            className={`${styles.item} ${
              category == cat.toLowerCase() ? styles.active : ""
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
