import styles from "./OrderCard.module.css";
import { icons } from "../../assets";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";

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

const OrderCard = () => {
  const dispatch = useDispatch();
  const { statusValue } = useSelector((state) => state.orders);
  const handleCancelOrder = () => {
    dispatch(
      showModal({
        modalType: "LogoutModal",
        modalProps: { id: 1, name: "M-47" },
      })
    );
  };

  const handleShowSidebar = () => {
    dispatch(showModal({ modalType: "RightSideBar", data: 12 }));
  };
  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.flex, styles.card_header)}>
        <span className={classnames(styles.number)}>М-47</span>
        <button
          className={classnames(styles.close, styles.flex)}
          onClick={handleCancelOrder}
        >
          <img src={icons.close_icon} alt="" />
        </button>
      </div>
      <p className={classnames(styles.name)}>Name</p>
      <ul className={classnames(styles.flex, styles.item_container)}>
        <li className={classnames(styles.item)}>1x Капучино</li>
        <li className={classnames(styles.item)}>1x Капучино</li>
        <li className={classnames(styles.item)}>1x Капучино</li>
        <li
          className={classnames(styles.item, styles.color)}
          onClick={handleShowSidebar}
        >
          Еще +2
        </li>
      </ul>
      <button
        className={classnames(styles.button, {
          [btnTypes[statusValue]]: statusValue,
        })}
      >
        {cardName[statusValue]}
      </button>
    </div>
  );
};

export default OrderCard;
