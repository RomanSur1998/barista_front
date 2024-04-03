import React from "react";
import { icons, images } from "../../../assets";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "../../../redux/slices/modalSlice";
import styles from "./AboutItemModal.module.css";

const AboutItemModal = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(hideModal());
  };

  const showAdditivesModal = () => {
    dispatch(showModal({ modalType: "AdditivesModal" }));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__header}>
              <h3>Чизкейк</h3>
              <img
                src={icons.close_icon}
                alt="Close"
                onClick={handleModalClose}
              />
            </div>
            <div className={styles.about_wrapper}>
              <img src={images.cheesecake} alt="Cheesecake" />
              <p>
                Чизкейк - сладкий десерт, состоящий из одного или нескольких
                слоев.
              </p>
              {/* <p>{product.description}</p> */}
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
