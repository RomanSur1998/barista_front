import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../redux/slices/modalSlice";
import { icons } from "../../../assets";
import styles from "./LogoutModal.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { deleteOrders } from "../../../redux/actions/ordersAction";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modalProps } = useSelector((state) => state.modal);
  console.log(modalProps);

  const handleModalClose = () => {
    dispatch(hideModal());
  };

  const cancelOrders = () => {
    dispatch(deleteOrders(modalProps.id));
  };

  const handleLogout = () => {
    Cookies.set("accessToken", "");
    Cookies.set("refreshToken", "");
    navigate("/");
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
            {modalProps?.name ? (
              <p> Вы действительно хотите отменить заказ {modalProps?.name}</p>
            ) : (
              <p> Вы действительно хотите выйти из учетной записи?</p>
            )}

            <div className={styles.modal__btns}>
              <button
                className={classnames(styles.modal__btn, styles.modal__yes)}
                onClick={modalProps?.id ? cancelOrders : handleLogout}
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
