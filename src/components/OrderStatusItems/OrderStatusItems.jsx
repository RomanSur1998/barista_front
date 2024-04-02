import React, { useState } from "react";
import classNames from "classnames";
import styles from "./OrderStatusItems.module.css";
import { statusList } from "../../helpers/StatusList";
import { useDispatch, useSelector } from "react-redux";
import { setStatusValue } from "../../redux/slices/ordersSlice";

const OrderStatusItems = ({ selectedOrderType }) => {
  const dispatch = useDispatch();
  const { statusValue } = useSelector((state) => state.orders);

  const handleSetStatus = (value) => {
    dispatch(setStatusValue(value));
  };

  return (
    <div className={styles.orderstatus_wrapper}>
      {statusList.map((status) => {
        return (
          <button
            key={status.name}
            className={classNames(
              styles.orderstatus_btn,
              styles.orderstatus_new,
              {
                [styles.selectedStatus]: statusValue === status.name,
              }
            )}
            onClick={() => handleSetStatus(status.name)}
          >
            <span
              className={classNames(styles.order_status, styles[status?.style])}
            ></span>
            {status.name}
          </button>
        );
      })}
    </div>
  );
};

export default OrderStatusItems;
