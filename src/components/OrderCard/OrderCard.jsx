import styles from "./OrderCard.module.css";
import { icons } from "../../assets";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";
import { closeOrders, confirmOrders } from "../../redux/actions/ordersAction";
import { useState } from "react";

const btnTypes = {
  Готово: styles.done,
  Завершено: styles.ready,
  Отменено: styles.cancelled,
  "В процессе": styles.inprocess,
};
const cardName = {
  Готово: "Заказ готов",
  Завершено: "Заказ завершен",
  Отменено: "Заказ отменен",
  Новый: "Принять ",
  Отклонен: "Отклонить",
  "В процессе": "Завершить",
};

const OrderCard = ({ elem }) => {
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  const { statusValue } = useSelector((state) => state.orders);

  const handleCancelOrder = () => {
    setColor(!color);
    dispatch(
      showModal({
        modalType: "LogoutModal",
        modalProps: { id: 1, name: "M-47" },
      })
    );
  };

  const handleChangeOrder = () => {
    if (statusValue === "Новый") {
      dispatch(confirmOrders(1));
    } else if (statusValue === "В процессе") {
      dispatch(closeOrders(1));
    }
  };

  const handleShowSidebar = () => {
    setColor(!color);
    dispatch(showModal({ modalType: "RightSideBar", modalProps: elem }));
  };

  return (
    <div className={classnames(styles.container, { [styles.fill]: color })}>
      <div className={classnames(styles.flex, styles.card_header)}>
        <span className={classnames(styles.number, { [styles.white]: color })}>
          {elem?.table}
        </span>
        <button
          className={classnames(styles.close, styles.flex)}
          onClick={handleCancelOrder}
        >
          <img src={color ? icons.mdi_close : icons.close_icon} alt="" />
        </button>
      </div>
      <p className={classnames(styles.name, { [styles.white]: color })}>
        {elem?.name}
      </p>
      <ul className={classnames(styles.flex, styles.item_container)}>
        {elem?.data?.map((item) => {
          return (
            <li
              key={item.name}
              className={classnames(styles.item, { [styles.white]: color })}
            >
              1 x {item.name}
            </li>
          );
        })}

        <li
          className={classnames(styles.item, styles.color)}
          onClick={handleShowSidebar}
        >
          Еще +2
        </li>
      </ul>
      <button
        className={classnames(
          styles.button,
          { [styles.fill_btn]: color },
          {
            [btnTypes[statusValue]]: statusValue,
          }
        )}
        onClick={() => {
          handleChangeOrder();
        }}
      >
        {cardName[statusValue]}
      </button>
    </div>
  );
};

export default OrderCard;
