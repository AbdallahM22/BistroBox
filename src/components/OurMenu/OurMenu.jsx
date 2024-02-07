import { useEffect, useState } from "react";
import Heading from "../../views/Heading";
import Products from "../../views/Products";
import SmallHeading from "../../views/SmallHeading";
import styles from "./OurMenu.module.css";

import Sidebar from "../../views/Sidebar";
import Button from "../../views/Button";
import FilterProduct from "../../views/FilterProduct";
// import images
import taco from "../../assets/taco1.png";
import tona from "../../assets/tona1.png";

const PRODUCTS = [
  {
    id: 0,
    category: "salads",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 1,
    category: "salads",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 2,
    category: "salads",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 3,
    category: "sandwiches",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 4,
    category: "snacks",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 5,
    category: "crispers",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 6,
    category: "desserts",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 7,
    category: "snacks",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 8,
    category: "crispers",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 9,
    category: "desserts",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 10,
    category: "salads",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 11,
    category: "crispers",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 12,
    category: "salads",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 13,
    category: "sandwiches",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 14,
    category: "crispers",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 15,
    category: "crispers",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 16,
    category: "snacks",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 17,
    category: "snacks",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 18,
    category: "crispers",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 19,
    category: "crispers",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 20,
    category: "saladsa",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 21,
    category: "saladsa",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 22,
    category: "saladsb",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 23,
    category: "saladsb",
    image: taco,
    name: "Mexican Taco Salad",
  },
  {
    id: 24,
    category: "saladsc",
    image: tona,
    name: "Tuna Pasta Salad",
  },
  {
    id: 25,
    category: "saladsc",
    image: tona,
    name: "Tuna Pasta Salad",
  },
];
const CATEGORIES = [
  "SALADS",
  "SANDWICHES",
  "SNACKS",
  "CRISPERS",
  "DESSERTS",
  "SALADSa",
  "SALADSb",
  "SALADSc",
];
const OurMenu = () => {
  const [products, setProducts] = useState(PRODUCTS);

  const filterProducts = (category) => {
    console.log(category);
    setProducts((prevProducts) => {
      return PRODUCTS.filter((product) => {
        return product.category.toLowerCase() === category.toLowerCase();
      });
    });
  };

  useEffect(() => {
    filterProducts("salads");
  }, []);
  return (
    <div className={styles.menu}>
      <div className="container">
        <SmallHeading style={{ color: "#C41E58" }}>Our menu</SmallHeading>
        <Heading>
          Menu That Always
          <br /> Makes You Fall In Love
        </Heading>
        <div className={styles["products-container"]}>
          <Sidebar categories={CATEGORIES} filter={filterProducts} />
          <FilterProduct categories={CATEGORIES} filter={filterProducts} />
          <Products products={products} />
        </div>
        <Button>check our menu</Button>
      </div>
    </div>
  );
};

export default OurMenu;
