import React from "react";
import { icons, images } from "../../../assets";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "../../../redux/slices/modalSlice";
import styles from "./AboutItemModal.module.css";

const AboutItemModal = ({ product, handleModalClose }) => {
  const dispatch = useDispatch();

  // const handleModalClose = () => {
  //   dispatch(hideModal());
  //   console.log("Modal close clicked");
  // };

  const showAdditivesModal = () => {
    dispatch(showModal({ modalType: "AdditivesModal" }));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__header}>
              <h3>{product.name}</h3>
              <img
                src={icons.close_icon}
                alt="Close"
                onClick={handleModalClose}
              />
            </div>
            <div className={styles.about_wrapper}>
              <img
                src={product.url}
                alt="Cheesecake"
                className={styles.product_img}
              />
              <p>{product.description}</p>
            </div>

            <div className={styles.ingredients_wrapper}>
              <h4>Основные ингредиенты</h4>
              <ul>
                <li>печенье (песочное) – 300 гр;</li>
                <li>сливочное масло – 100 гр;</li>
                <li>мускатный орех</li>
              </ul>
            </div>

            <button className={styles.modal__btn} onClick={showAdditivesModal}>
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItemModal;
