/* eslint-disable react/prop-types */
import styles from "./BasketCard.module.css";
import classnames from "classnames";

const BasketCard = ({ name }) => {
  return (
    <div className={classnames(styles.container)}>
      <img
        className={classnames(styles.image)}
        src="https://i.pinimg.com/736x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg"
        alt=""
      />
      <div className={classnames(styles.info_block)}>
        <div className={classnames(styles.description)}>
          <h3>{name}</h3>
          <p>Коровеье молоко</p>
          <p>Коровеье молоко</p>
        </div>
        <span className={classnames(styles.price)}>120 c</span>
      </div>
      <div className={classnames(styles.counter_block)}>
        <button type="button">-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
