import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.parent}>
      <nav className={styles.Navbar}>
        <div className={styles.links}>
          <img src="./icon.ico" alt="logo" className={styles.logo} />
          <div className={styles.title}>Antique Coins</div>
          {/* <ul className={styles.nav_items}>
            <li>
              <a className={styles.nav_links} href="/shop">
                Shop
              </a>
            </li>
            <li>
              <a className={styles.nav_links} href="/about">
                About
              </a>
            </li>
            <li>
              <a className={styles.cartBtn} href="/cart">
                Cart
              </a>
            </li>
            <li>
              <a className={styles.loginBtn} href="/login">
                Login
              </a>
            </li>
          </ul> */}
          <div className={styles.nav_links}>Shop</div>
          <div className={styles.nav_links} href="/about">About</div>
        </div>
        <div className={styles.cartBtn}>Cart</div>
        <div className={styles.loginBtn}>Login</div>
      </nav>
    </div>
  );
};

export default Navbar;
