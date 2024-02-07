import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../views/Logo";
import Menu from "../Menu/Menu";

const Header = ({ openMenu, onClick }) => {
  return (
    <div className="container">
      <header>
        <Logo />
        {!openMenu && (
          <ul className={styles.nav}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Our Menu</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        )}
        <button>let&apos;s collaborate</button>
        <div
          onClick={onClick}
          className={`${styles["menu-icon"]} ${openMenu ? styles.open : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <Menu open={openMenu} />
    </div>
  );
};

export default Header;
