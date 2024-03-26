import React, { useState } from "react";
import styles from "./Notifications.module.css";
import { icons } from "../../assets";
import NotificationCards from "../NotificationCards/NotificationCards";

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
  //const [isOpenNotificationList, setIsOpenNotificationList] = useState(false);
  //const [isOpenNotification, setIsOpenNotification] = useState(false);

  // const openNotification = () => {
  //   setIsOpenNotification(!isOpenNotification);
  // };

  const closeNotificationList = (id) => {
    const updatedNotificationList = notificationList.filter(
      (item) => item.id !== id
    );
    setNotificationList(updatedNotificationList);
  };

  const closeAllNotificationList = () => {
    setNotificationList([]);
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
            <NotificationCards
              key={noticeData.id}
              noticeData={noticeData}
              closeNotificationList={closeNotificationList}
              handleClick={handleClick}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Notifications;
