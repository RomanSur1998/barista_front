/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { icons, images } from "../../assets";
import { hideModal } from "../../redux/slices/modalSlice";
import styles from "./RightSideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../BasketCard/BasketCard";

const RightSideBar = () => {
  //   const [openSideBar, setOpenSideBar] = useState(true);
  const [count, setCount] = useState(1);

  const { modalProps } = useSelector((state) => state.modal);
  console.log(modalProps, "mod");

  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(hideModal());
  };

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     if (count > 1) {
  //       setCount(count - 1);
  //     }
  //   };

  // const dishData = [
  //   {
  //     order_title: "Латте",
  //     order_details: ["Коровье молоко", "Карамельный сироп"],
  //     price: "140",
  //   },
  // ];

  return (
    <>
      {/* {openSideBar && ( */}
      <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
          <h3 className={styles.sidebar__title}>Заказ на вынос</h3>
          <img
            src={icons.closeWhite_icon}
            alt="Close"
            className={styles.sidebar__close}
            onClick={closeSidebar}
          />
        </div>
        {modalProps.data ? (
          <div className={styles.sidebar__card}>
            {modalProps?.data.map((elem) => {
              return <BasketCard name={elem?.name} />;
            })}
            <button className={styles.footer__btn_fill}>Добавить</button>
          </div>
        ) : (
          <div className={styles.sidebar__content}>
            <div className={styles.orderdetails_wrapper}>
              <p className={styles.sidebar__text}>Вы еще ничего не добавили</p>
              <img src={images.add_item} alt="Вы ничего не доавили" />
            </div>

            <div className={styles.sidebar__footer}>
              <div className={styles.footer_price}>
                <p className={styles.footer__title}>Итого</p>
                <p>0 сом</p>
              </div>

              <button className={styles.footer__btn}>Закрыть счет</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RightSideBar;
