import React from "react";
import "./LogoutModal.module.css";
import classNames from "classnames";
import { useDispatch } from "react-redux";

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
              <h3>Выход из учетной записи</h3>
              <img
                src={mdi_closeBlack}
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
