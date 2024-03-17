import React from "react";
import styles from "./OrderCard.module.css";
import { icons } from "../../assets";
import classnames from "classnames";

const OrderCard = () => {
  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.flex, styles.card_header)}>
        <span className={classnames(styles.number)}>М-47</span>
        <button className={classnames(styles.close, styles.flex)}>
          <img src={icons.close_icon} alt="" />
        </button>
      </div>
      <p className={classnames(styles.name)}>Name</p>
      <ul className={classnames(styles.flex, styles.item_container)}>
        <li className={classnames(styles.item)}>1x Капучино</li>
        <li className={classnames(styles.item)}>1x Капучино</li>
        <li className={classnames(styles.item)}>1x Капучино</li>
        <li className={classnames(styles.item, styles.color)}>Еще +2</li>
      </ul>
      <button className={classnames(styles.button)}>Принять</button>
    </div>
  );
};

export default OrderCard;
