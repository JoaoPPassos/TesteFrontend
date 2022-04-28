import React from "react";

import styles from "./styles.module.scss";

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.menu}></div>
      {children}
    </main>
  );
};

export default Main;
