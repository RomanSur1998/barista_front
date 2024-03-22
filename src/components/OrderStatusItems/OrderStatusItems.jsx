import React, { useState } from "react";
import classNames from "classnames";
import styles from "./OrderStatusItems.module.css";

const OrderStatusItems = ({ selectedOrderType }) => {
  const [activeStatus, setActiveStatus] = useState("new");
  const [showNewOrders, setShowNewOrders] = useState(true);

  const handleOrderTypeSelection = (ordertype) => {
    setSelectedOrderType(ordertype);
    setShowNewOrders(ordertype === "takeaway");
  };

  const handleStatus = (status) => {
    setActiveStatus(status);
  };

  //   const handleShowNewOrders = () => {
  //     setShowNewOrders(true);
  //     setActiveStatus("new");
  //   };

  return (
    <div className={styles.orderstatus_wrapper}>
      <button
        className={classNames(styles.orderstatus_btn, styles.orderstatus_new, {
          [styles.selectedStatus]: activeStatus === "new",
        })}
        onClick={() => handleStatus("new")}
      >
        <span
          className={classNames(styles.order_status, styles.status_new)}
        ></span>
        Новые
      </button>
      <button
        className={classNames(
          styles.orderstatus_btn,
          styles.orderstatus_inprocess,
          {
            [styles.selectedStatus]: activeStatus === "inprocess",
          }
        )}
        onClick={() => handleStatus("inprocess")}
      >
        <span
          className={classNames(styles.order_status, styles.status_inprocess)}
        ></span>
        В процессе
      </button>
      {selectedOrderType === "takeaway" ? null : (
        <button
          className={classNames(
            styles.orderstatus_btn,
            styles.orderstatus_ready,
            {
              [styles.selectedStatus]: activeStatus === "ready",
            }
          )}
          onClick={() => handleStatus("ready")}
        >
          <span
            className={classNames(styles.order_status, styles.status_ready)}
          ></span>
          Готово
        </button>
      )}

      <button
        className={classNames(
          styles.orderstatus_btn,
          styles.orderstatus_cancelled,
          {
            [styles.selectedStatus]: activeStatus === "cancelled",
          }
        )}
        onClick={() => handleStatus("cancelled")}
      >
        <span
          className={classNames(styles.order_status, styles.status_cancelled)}
        ></span>
        Отменено
      </button>
      <button
        className={classNames(styles.orderstatus_btn, styles.orderstatus_done, {
          [styles.selectedStatus]: activeStatus === "done",
        })}
        onClick={() => handleStatus("done")}
      >
        <span
          className={classNames(styles.order_status, styles.status_done)}
        ></span>
        Завершено
      </button>
    </div>
  );
};

export default OrderStatusItems;
