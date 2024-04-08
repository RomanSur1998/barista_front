import { useEffect } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import OrderCard from "../../components/OrderCard/OrderCard";
import OrderStatusItems from "../../components/OrderStatusItems/OrderStatusItems";
import styles from "./OrdersPage.module.css";
import classnames from "classnames";
import { Pagination } from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/ordersAction";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const { statusValue, isHere, pageNumber } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    dispatch(
      getOrders({
        statusValue: statusValue,
        pageNumber: pageNumber,
        isHere: isHere,
      })
    );
  }, [statusValue, isHere, pageNumber]);

  return (
    <MainLayout>
      <div className={classnames(styles.order_container)}>
        <OrderStatusItems />
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
