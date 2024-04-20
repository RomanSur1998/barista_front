import classNames from "classnames";
import styles from "./OrderStatusItems.module.css";
import { statusList, statusListHere } from "../../helpers/StatusList";
import { useDispatch, useSelector } from "react-redux";
import { setStatusValue } from "../../redux/slices/ordersSlice";

const OrderStatusItems = () => {
  const dispatch = useDispatch();
  const { statusValue } = useSelector((state) => state.orders);

  const { switchValue } = useSelector((state) => state.data);

  console.log(switchValue, "PATH NAME");

  const handleSetStatus = (value) => {
    dispatch(setStatusValue(value));
  };
  const newStatusValue =
    switchValue !== "На вынос" ? statusList : statusListHere;

  return (
    <div className={styles.orderstatus_wrapper}>
      {newStatusValue?.map((status) => {
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
