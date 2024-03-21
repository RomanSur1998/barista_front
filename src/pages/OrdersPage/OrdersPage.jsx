import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import OrderCard from "../../components/OrderCard/OrderCard";
import OrderStatusItems from "../../components/OrderStatusItems/OrderStatusItems";
import styles from "./OrdersPage.module.css";
import classnames from "classnames";

const OrdersPage = () => {
  const [selectedOrderType, setSelectedOrderType] = useState("takeaway");
  const handleOrderTypeSelection = (ordertype) => {
    setSelectedOrderType(ordertype);
  };

  return (
    <MainLayout>
      <OrderStatusItems selectedOrderType={selectedOrderType} />
      <div className={classnames(styles.order_container)}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </MainLayout>
  );
};

export default OrdersPage;
