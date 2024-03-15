import React from "react";
import styles from "./OrderCard.module.css";
import { icons } from "../../assets";
import classnames from "classnames";

const OrderCard = () => {
  return (
    <div className={classnames(styles.container)}>
      <div>
        <span>М-47</span>
        <button>
          <img src={icons.close_icon} alt="" />
        </button>
      </div>
      <div>ddfsdsd</div>
      <button>Принять</button>
    </div>
  );
};

export default OrderCard;
