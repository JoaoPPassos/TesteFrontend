import React from "react";

import styles from "./styles.module.scss";
const Card = (props) => {
  const { description, imgSrc } = props;
  return (
    <div className={styles.Card}>
      <img src={imgSrc} className={styles.Image} />
      <div>{description}</div>
    </div>
  );
};

export default Card;
