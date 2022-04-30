import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const ScrollSections = ({ children }) => {
  let subComponentList = Object.keys(ScrollSections);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className={styles.ScrollSections}>
      {subComponents.map((component) => component)}
      {children}
    </div>
  );
};

ScrollSections.Section = (props) => {
  const { ...restProps } = props;

  return (
    <section className={styles.Section} {...restProps}>
      {props.children}
    </section>
  );
};

export default ScrollSections;
