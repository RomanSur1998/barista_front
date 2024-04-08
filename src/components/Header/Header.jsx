import { useState } from "react";
import styles from "./Header.module.css";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import { icons } from "../../assets";
import { headersName } from "../../helpers/HeadersName";
import Notifications from "../Notifications/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { setSwitchValue } from "../../redux/slices/dataSlice";

const Header = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { switchValue } = useSelector((state) => state.data);

  console.log(switchValue, "PATH NAME");

  const [selectedOrderType, setSelectedOrderType] = useState("takeaway");
  const handleOrderTypeSelection = (ordertype, value) => {
    setSelectedOrderType(ordertype);
    dispatch(setSwitchValue(value));
  };

  const openNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  };

  return (
    <header className={classnames(styles.headerContainer)}>
      <h2 className={classnames(styles.title)}>{headersName[pathname]}</h2>
      {pathname !== "/menu" ? (
        <div className={classnames(styles.headerSelect)}>
          <div className={styles.ordertypebtns_wrapper}>
            <button
              className={classnames(
                styles.orderplace_btn,
                styles.takeaway_btn,
                {
                  [styles.selectedOrderType]: selectedOrderType === "takeaway",
                }
              )}
              onClick={() =>
                handleOrderTypeSelection(
                  "takeaway",
                  pathname == "/orders" ? "В заведении" : "График работы"
                )
              }
            >
              {pathname == "/orders" ? "На вынос" : "Профиль"}
            </button>
            <button
              className={classnames(styles.orderplace_btn, styles.inplace_btn, {
                [styles.selectedOrderType]: selectedOrderType === "inplace",
              })}
              onClick={() =>
                handleOrderTypeSelection(
                  "inplace",
                  pathname == "/orders" ? "На вынос" : "Профиль"
                )
              }
            >
              {pathname == "/orders" ? "В заведении" : "График работы"}
            </button>
          </div>
        </div>
      ) : null}
      <div className={classnames(styles.flex)}>
        {pathname === "/menu" ? (
          <label className={classnames(styles.input)} htmlFor="">
            <img src={icons.search_icon} alt="" />
            <input type="text" placeholder="Поиск" />
          </label>
        ) : null}
        <button
          className={classnames(styles.createButton)}
          onClick={openNotification}
        >
          {/* <img
          src={notificationIcon}
          alt="Notifications"
          className={styles.notifications_img}
          // onClick={openNotification}
          style={{ fill: isOpenNotification ? "#f47356" : "#5B7E9A" }}
        /> */}

          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="24"
              fill={isOpenNotification ? "#f47356" : "#5B7E9A"}
            />
            <path
              d="M34.5 32.1667V33.3334H13.5V32.1667L15.8333 29.8334V22.8334C15.8333 19.2167 18.2017 16.0317 21.6667 15.005V14.6667C21.6667 14.0479 21.9125 13.4544 22.3501 13.0168C22.7877 12.5792 23.3812 12.3334 24 12.3334C24.6188 12.3334 25.2123 12.5792 25.6499 13.0168C26.0875 13.4544 26.3333 14.0479 26.3333 14.6667V15.005C29.7983 16.0317 32.1667 19.2167 32.1667 22.8334V29.8334L34.5 32.1667ZM26.3333 34.5C26.3333 35.1189 26.0875 35.7124 25.6499 36.15C25.2123 36.5875 24.6188 36.8334 24 36.8334C23.3812 36.8334 22.7877 36.5875 22.3501 36.15C21.9125 35.7124 21.6667 35.1189 21.6667 34.5"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <Notifications isOpen={isOpenNotification} onClose={openNotification} />
    </header>
  );
};

export default Header;
