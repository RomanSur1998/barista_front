import React, { useEffect, useState } from "react";
import { images } from "../../assets/";
import classNames from "classnames";
import { showModal } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MenuCard.module.css";

const MenuCard = ({ products }) => {
  const dispatch = useDispatch();
  const [showBtns, setShowBtns] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [contentVisible, setContentVisible] = useState(true);

  const handleShowModal = () => {
    dispatch(showModal({ modalType: "AboutItemModal" }));
  };

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

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {products.map((product, index) => (
        <div key={index} className={classNames(styles.menucard)}>
          <div
            className={classNames(styles.menucard__content, [
              !contentVisible && styles.menucardContent_hidden,
            ])}
          >
            <div onClick={handleShowModal}>
              <img
                src={product.url}
                alt="The menu item"
                className={styles.menucard__img}
              />
            </div>

            <div className={styles.menucard__info}>
              <div className={styles.menucard__title}>{product.name}</div>
              <div className={styles.menucard__price}>{product.price}</div>
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
      ))}
    </>
  );
};

export default MenuCard;
