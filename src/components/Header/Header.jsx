import React, { useState } from "react";
import styles from "./Header.module.css";
import classnames from "classnames";
import { icons } from "../../assets";

const Header = () => {
  const [selectedOrderType, setSelectedOrderType] = useState("takeaway");
  const handleOrderTypeSelection = (ordertype) => {
    setSelectedOrderType(ordertype);
  };

  return (
    <header className={classnames(styles.headerContainer)}>
      <h2 className={classnames(styles.title)}>Заказы</h2>
      <div className={classnames(styles.headerSelect)}>
        {/* <button>На вынос</button>
        <button>В заведении</button> */}

        <div className={styles.ordertypebtns_wrapper}>
          <button
            className={classnames(styles.orderplace_btn, styles.takeaway_btn, {
              [styles.selectedOrderType]: selectedOrderType === "takeaway",
            })}
            onClick={() => handleOrderTypeSelection("takeaway")}
          >
            На вынос
          </button>
          <button
            className={classnames(styles.orderplace_btn, styles.inplace_btn, {
              [styles.selectedOrderType]: selectedOrderType === "inplace",
            })}
            onClick={() => handleOrderTypeSelection("inplace")}
          >
            В заведении
          </button>
        </div>
      </div>
      <button className={classnames(styles.createButtnon)}>
        <img src={icons.notification_icon} alt="" />
      </button>
    </header>
  );
};

export default Header;
