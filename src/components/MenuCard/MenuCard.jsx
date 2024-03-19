import React, { useState } from "react";
import styles from "./MenuCard.module.css";
import { images } from "../../assets/";
import classNames from "classnames";

const MenuCard = ({ menuItem }) => {
  const [showBtns, setShowBtns] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [contentVisible, setContentVisible] = useState(true);
  // const [modalActive, setModalActive] = useState(false);

  const handleBtnClick = () => {
    setShowBtns(true);
    setContentVisible(false);
  };

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div
        className={classNames(styles.menucard)}
        // onClick={() => setModalActive(true)}
      >
        <div
          className={classNames(styles.menucard__content, [
            !contentVisible && styles.menucardContent_hidden,
          ])}
        >
          <div>
            <img
              src={menuItem.img}
              alt="The menu item"
              className={styles.menucard__img}
            />
          </div>

          <div className={styles.menucard__info}>
            <div className={styles.menucard__title}>{menuItem.title}</div>
            <div className={styles.menucard__price}>{menuItem.price}</div>
          </div>

          <button onClick={handleBtnClick} className={styles.menucard__btn}>
            +
          </button>
        </div>

        {showBtns && (
          <div className={styles.counter}>
            <button
              onClick={handleRemoveItem}
              className={styles.counter__remove}
            >
              -
            </button>
            <p className={styles.counter__title}>{quantity}</p>
            <button onClick={handleAddItem} className={styles.counter__add}>
              +
            </button>
          </div>
        )}
      </div>
      {/* <Modal
        active={modalActive}
        setActive={setModalActive}
        className={styles.additivesModal}
      ></Modal> */}
    </>
  );
};

export default MenuCard;
