import React, { useState } from "react";
import { icons } from "../../assets";
import styles from "./NotificationCards.module.css";

const NotificationCards = ({
  noticeData,
  closeNotificationList,
  handleClick,
  noticeDataList,
}) => {
  const [notificationList, setNotificationList] = useState(noticeDataList);
  const [isOpenNotificationList, setIsOpenNotificationList] = useState(false);

  const closeAllNotificationList = () => {
    setNotificationList([]);
  };

  return (
    <div>
      <li
        id={noticeData.id}
        onClick={() => handleClick(noticeData.id)}
        key={noticeData.id}
        className={`${styles.notificationBlock__list} ${
          isOpenNotificationList ? styles.notificationBlock__list_active : ""
        }`}
      >
        <div className={styles.notificationBlock__info}>
          <div className={styles.notificationBlock__data}>
            <p className={styles.notificationBlockCard__title}>
              {noticeData.data}
            </p>

            <p className={styles.notificationBlockCard__time}>
              {noticeData.time}
            </p>
          </div>
          <button onClick={() => closeNotificationList(noticeData.id)}>
            <img src={icons.close_icon} alt="closeIconBlack" />
          </button>
        </div>
        <div className={styles.notificationBlock__listText}>
          {noticeData.fewProducts}
        </div>
        <div className={styles.notificationBlock__listText}>
          <span className={styles.notificationBlock__listText}>
            {noticeData.branch}
          </span>
        </div>
      </li>
    </div>
  );
};

export default NotificationCards;
