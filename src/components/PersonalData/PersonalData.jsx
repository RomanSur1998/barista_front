import React from "react";
import styles from "./PersonalData.module.css";
import classnames from "classnames";

const PersonalData = ({ data }) => {
  return (
    <div className={classnames(styles.container)}>
      <h2>Личные данные</h2>
      <ul className={classnames(styles.data_container)}>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Имя</span>
          <p className={classnames(styles.text_block)}>{data?.name}</p>
        </li>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Позиция</span>
          <p className={classnames(styles.text_block)}>{data?.position}</p>
        </li>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Почта</span>
          <p className={classnames(styles.text_block)}>{data?.email}</p>
        </li>
        <li className={classnames(styles.item)}>
          <span className={classnames(styles.span)}>Дата рождения</span>
          <p className={classnames(styles.text_block)}>{data?.birthday}</p>
        </li>
      </ul>
    </div>
  );
};

export default PersonalData;
