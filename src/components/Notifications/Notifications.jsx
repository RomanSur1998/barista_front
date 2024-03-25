import React, { useState } from "react";
import styles from "./Notifications.module.css";
import { icons } from "../../assets";

const noticeDataList = [
  {
    id: 1,
    data: "Стол №10",
    time: "14:09",
    fewProducts: "М-47 (В заведении)",
    branch: "Капучино х1, Латте х1, Чизкейк х1, Багровый за..",
  },
  {
    id: 2,
    data: "На вынос",
    time: "11:53",
    fewProducts: "М-228 (На вынос)",
    branch: "Капучино х1, Латте х1, Чизкейк х1, Багровый за..",
  },
  {
    id: 3,
    data: "Стол №10",
    time: "10:30",
    fewProducts: "М-47 (В заведении)",
    branch: "Капучино х1, Латте х1, Чизкейк х1, Багровый за..",
  },
  {
    id: 4,
    data: "На вынос",
    time: "12:45",
    fewProducts: "М-228 (На вынос)",
    branch: "NeoCafe Tolstogo",
  },
  {
    id: 5,
    data: "Стол №10",
    time: "15:02",
    fewProducts: "М-47 (В заведении)",
    branch: "Капучино х1, Латте х1, Чизкейк х1, Багровый за..",
  },
  {
    id: 6,
    data: "На вынос",
    time: "19:00",
    fewProducts: "М-228 (На вынос)",
    branch: "Капучино х1, Латте х1, Чизкейк х1, Багровый за..",
  },
];

const Notifications = ({ isOpen, onClose }) => {
  const [notificationList, setNotificationList] = useState(noticeDataList);
  const [isOpenNotificationList, setIsOpenNotificationList] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const openNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  };

  const closeNotificationList = (id) => {
    const updatedNotificationList = notificationList.filter(
      (item) => item.id !== id
    );
    setNotificationList(updatedNotificationList);
  };

  const closeAllNotificationList = () => {
    setNotificationList([]);
  };

  const handleToggleNotifications = () => {
    // Toggle the visibility of the notifications
    setNotificationList(isOpen ? [] : noticeDataList);
  };

  const handleClick = (id) => {
    console.log(`Элемент с id ${id} был кликнут!`);
  };

  return (
    <div
      className={`${styles.notificationBlock} ${
        isOpen && styles.notificationBlock_active
      }`}
    >
      <div className={styles.notificationBlock__titleBlock}>
        <div></div>
        <h3>Уведомления</h3>
        <button onClick={onClose}>
          <img src={icons.closeWhite_icon} alt="closeIcon" />
        </button>
      </div>

      <div className={styles.notificationBlock__clearBtnBlock}>
        <button
          onClick={closeAllNotificationList}
          className={styles.notificationBlock__clearBtn}
        >
          Очистить
        </button>
      </div>
      <ul className={styles.notificationBlock__innerBlock}>
        {notificationList.length === 0 ? (
          <h3 className={styles.notificationBlock__noNotifications}>
            Уведомлений нет
          </h3>
        ) : (
          notificationList.map((noticeData) => (
            <li
              id={noticeData.id}
              onClick={() => handleClick(noticeData.id)}
              key={noticeData.id}
              className={`${styles.notificationBlock__list} ${
                isOpenNotificationList
                  ? styles.notificationBlock__list_active
                  : ""
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
          ))
        )}
      </ul>
    </div>
  );
};

export default Notifications;
