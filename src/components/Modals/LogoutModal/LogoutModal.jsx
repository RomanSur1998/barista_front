import React from "react";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../redux/slices/modalSlice";
import { icons } from "../../../assets";
import styles from "./LogoutModal.module.css";

const LogoutModal = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(hideModal());
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__content}>
            <div className={styles.modal__header}>
              <h3 className={styles.modal_title}>Выход из учетной записи</h3>
              <img
                src={icons.close_icon}
                alt="Close"
                className={styles.modal__close}
                onClick={handleModalClose}
              />
            </div>
            <p> Вы действительно хотите выйти из учетной записи?</p>

            <div className={styles.modal__btns}>
              <button
                className={classnames(styles.modal__btn, styles.modal__yes)}
                // onClick={handleLogout}
              >
                Да
              </button>
              <button
                className={classnames(styles.modal__btn, styles.modal__no)}
                onClick={handleModalClose}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
