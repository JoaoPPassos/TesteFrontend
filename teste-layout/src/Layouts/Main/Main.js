import React from "react";
import { Menu } from "../../components";
import Logo from "../../Assets/Logo.png";
import styles from "./styles.module.scss";
import mock from "../../mock/mock.json";

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <div className={styles.Logoarea}>
          <img src={Logo} />
        </div>
        <Menu>
          {mock.menus.map((item, index) => (
            <Menu.ItemMenu
              value={index + 1}
              sectionReference={item.ref}
              title={item.name}
            />
          ))}
        </Menu>
        {/* <a href="#HOME" key="HOME">
          HOME
        </a>
        <a href="#WHO" key="WHO">
          WHO
        </a> */}
      </div>
      <div className={styles.body}>{children}</div>
    </main>
  );
};

export default Main;
