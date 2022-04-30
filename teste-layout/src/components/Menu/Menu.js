import React from "react";

import styles from "./styles.module.scss";

const Menu = ({ children }) => {
  let subComponentList = Object.keys(Menu);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <ul className={styles.Menu}>
      {subComponents.map((component) => component)}
      {children}
    </ul>
  );
};

Menu.ItemMenu = (props) => {
  const { value, sectionReference, title, ...restProps } = props;
  return (
    <li
      className={styles.Item}
      {...restProps}
      onClick={() => {
        window.location.href = sectionReference;
      }}
    >
      <span className={styles.BackgroundNumber}>
        {String(value).padStart(2, "0")}.
      </span>
      <a className={styles.Name}>{title}</a>
    </li>
  );
};

export default Menu;
