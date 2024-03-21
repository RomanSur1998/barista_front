import { useState } from "react";
import styles from "./AdditivesModal.module.css";
import { hideModal } from "../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { icons } from "../../../assets";
import classnames from "classnames";

const AdditivesModal = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleModalClose = () => {
    dispatch(hideModal());
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
    <div className={styles.modal}>
      <div className={styles.modal__overlay}>
        <div className={styles.additivesModal}>
          <div className={styles.additivesModal_header}>
            <h3>Выберите опции</h3>
            <img
              src={icons.close_icon}
              className={styles.logoutModal_close}
              alt="Logout"
              onClick={handleModalClose}
            />
          </div>

          <p className={styles.additives_title}>Молоко</p>
          <div className={styles.additives_wrapper}>
            <div className={styles.additives}>
              <label className={styles.additives_radioBtn}>
                <input type="radio" name="additive" />
                <span className={styles.checkmark}></span>
              </label>

              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>коровье</p>
                <p className={styles.additives_price}>+0 c</p>
              </div>
              {/* <hr className={styles.additives__line} /> */}
            </div>
            <div className={styles.additives}>
              <label className={styles.additives_radioBtn}>
                <input type="radio" name="additive" />
                <span className={styles.checkmark}></span>
              </label>

              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>овсяное</p>
                <p className={styles.additives_price}>+0 c</p>
              </div>
              {/* <hr className={styles.additives__line} /> */}
            </div>
            <div className={styles.additives}>
              <label className={styles.additives_radioBtn}>
                <input type="radio" name="additive" />
                <span className={styles.checkmark}></span>
              </label>
              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>соевое</p>
                <p className={styles.additives_price}>+0 c</p>
              </div>
              {/* <hr className={styles.additives__line} /> */}
            </div>
          </div>

          <p
            className={classnames(
              styles.additives_title,
              styles.additives_sirop
            )}
          >
            Сиропы
          </p>
          <div className={styles.additives_wrapper}>
            <div className={styles.additives}>
              <input type="checkbox" />
              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>Клубничный</p>
                <p className={styles.additives_price}>+30 c</p>
              </div>
            </div>
            <div className={styles.additives}>
              <input type="checkbox" />
              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>Карамельный</p>
                <p className={styles.additives_price}>+50 c</p>
              </div>
            </div>
          </div>

          <div className={styles.additives_footer}>
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

            <button className={styles.footer_addBtn}>Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditivesModal;
