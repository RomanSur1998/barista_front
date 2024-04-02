import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import OrderCard from "../../components/OrderCard/OrderCard";
import OrderStatusItems from "../../components/OrderStatusItems/OrderStatusItems";
import styles from "./OrdersPage.module.css";
import classnames from "classnames";
import { Pagination } from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/ordersAction";

const OrdersPage = () => {
  const [selectedOrderType, setSelectedOrderType] = useState("takeaway");
  const dispatch = useDispatch();
  const { statusValue, isHere, filialID, pageNumber } = useSelector(
    (state) => state.orders
  );
  const handleOrderTypeSelection = (ordertype) => {
    setSelectedOrderType(ordertype);
  };

  useEffect(() => {
    dispatch(getOrders(statusValue));
  }, [statusValue, isHere, pageNumber]);

  return (
    <MainLayout>
      <div className={classnames(styles.order_container)}>
        <OrderStatusItems selectedOrderType={selectedOrderType} />
        <div className={classnames(styles.card_container)}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
        <div className={classnames(styles.pagination)}>
          <Pagination />
        </div>
      </div>
    </MainLayout>
  );
};

export default OrdersPage;
