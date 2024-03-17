import React from "react";
import styles from "./PersonalData.module.css";
import classnames from "classnames";

const PersonalData = () => {
  return (
    <div className={classnames(styles.container)}>
      <h2>Личные данные</h2>
      <ul className={classnames(styles.data_container)}>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Имя</span>
          <p className={classnames(styles.text_block)}>Александр</p>
        </li>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Фамилия</span>
          <p className={classnames(styles.text_block)}>Бутовски</p>
        </li>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Номер телефона</span>
          <p className={classnames(styles.text_block)}>555 555 5555</p>
        </li>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Дата рождения</span>
          <p className={classnames(styles.text_block)}>14.03.2001</p>
        </li>
      </ul>
    </div>
  );
};

export default PersonalData;
