import { useEffect } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import OrderCard from "../../components/OrderCard/OrderCard";
import OrderStatusItems from "../../components/OrderStatusItems/OrderStatusItems";
import styles from "./OrdersPage.module.css";
import classnames from "classnames";
import { Pagination } from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/ordersAction";

const data = [
  {
    table: "M-47",
    name: "Адель",
    data: [
      { name: "Капучино", value: "350 мл" },
      { name: "Латте", value: "400 мл" },
      { name: "Эспрессо", value: "30 мл" },
    ],
  },
  {
    table: "A-12",
    name: "Иван",
    data: [
      { name: "Каппучино", value: "250 мл" },
      { name: "Мокко", value: "300 мл" },
      { name: "Флэт Уайт", value: "350 мл" },
    ],
  },
  {
    table: "B-33",
    name: "Елена",
    data: [
      { name: "Американо", value: "500 мл" },
      { name: "Моккачино", value: "400 мл" },
      { name: "Карамельный латте", value: "450 мл" },
    ],
  },
  {
    table: "C-21",
    name: "Мария",
    data: [
      { name: "Эспрессо", value: "30 мл" },
      { name: "Каппучино", value: "250 мл" },
      { name: "Флэт Уайт", value: "350 мл" },
    ],
  },
  {
    table: "D-15",
    name: "Николай",
    data: [
      { name: "Мокко", value: "300 мл" },
      { name: "Латте", value: "400 мл" },
      { name: "Американо", value: "500 мл" },
    ],
  },
  {
    table: "E-27",
    name: "Ольга",
    data: [
      { name: "Карамельный латте", value: "450 мл" },
      { name: "Моккачино", value: "400 мл" },
      { name: "Эспрессо", value: "30 мл" },
    ],
  },
  {
    table: "F-09",
    name: "Павел",
    data: [
      { name: "Каппучино", value: "250 мл" },
      { name: "Латте", value: "400 мл" },
      { name: "Мокко", value: "300 мл" },
    ],
  },
  {
    table: "G-74",
    name: "Рита",
    data: [
      { name: "Флэт Уайт", value: "350 мл" },
      { name: "Американо", value: "500 мл" },
      { name: "Каппучино", value: "250 мл" },
    ],
  },
  // {
  //   table: "H-88",
  //   name: "Сергей",
  //   data: [
  //     { name: "Моккачино", value: "400 мл" },
  //     { name: "Карамельный латте", value: "450 мл" },
  //     { name: "Латте", value: "400 мл" },
  //   ],
  // },
  // {
  //   table: "I-56",
  //   name: "Татьяна",
  //   data: [
  //     { name: "Американо", value: "500 мл" },
  //     { name: "Эспрессо", value: "30 мл" },
  //     { name: "Флэт Уайт", value: "350 мл" },
  //   ],
  // },
];

const OrdersPage = () => {
  const dispatch = useDispatch();
  const { statusValue, pageNumber } = useSelector((state) => state.orders);
  const { switchValue } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(
      getOrders({
        statusValue: statusValue,
        pageNumber: pageNumber,
        isHere: switchValue === "На вынос" ? true : false,
      })
    );
  }, [statusValue, switchValue, pageNumber]);

  return (
    <MainLayout>
      <div className={classnames(styles.order_container)}>
        <OrderStatusItems />
        <div className={classnames(styles.card_container)}>
          {data.map((elem) => {
            return <OrderCard elem={elem} key={elem.name} />;
          })}
        </div>
        <div className={classnames(styles.pagination)}>
          <Pagination />
        </div>
      </div>
    </MainLayout>
  );
};

export default OrdersPage;
