import React from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./OrdersPage.module.css";
import classnames from "classnames";
import { Pagination } from "../../components/Pagination/Pagination";

const OrdersPage = () => {
  return (
    <MainLayout>
      <div className={classnames(styles.order_container)}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <div className={classnames(styles.pagination)}>
          <Pagination />
        </div>
      </div>
    </MainLayout>
  );
};

export default OrdersPage;
