import React from "react";
import classnames from "classnames";
import styles from "./ScheduleData.module.css";

export const ScheduleData = () => {
  return (
    <div className={classnames(styles.schedule_container)}>
      <div className={styles.day}>
        <div className={classnames(styles.block)}>
          <div className={classnames(styles.round, styles.color)}></div>
          <h3>Рабочие дни</h3>
        </div>
        <div className={classnames(styles.block)}>
          <div className={classnames(styles.round)}></div>
          <h3>Выходные</h3>
        </div>
      </div>
      <div className={classnames(styles.flex, styles.week)}>
        <div className={classnames(styles.flex, styles.align)}>
          <div className={classnames(styles.rect)}></div> <h3>Понедельник</h3>
        </div>
        <div className={classnames(styles.flex, styles.align)}>
          <div className={classnames(styles.rect)}></div> <h3>Вторник</h3>
        </div>
        <div className={classnames(styles.flex, styles.align)}>
          <div className={classnames(styles.rect)}></div> <h3>Среда</h3>
        </div>
        <div className={classnames(styles.flex, styles.align)}>
          <div className={classnames(styles.rect)}></div> <h3>Четверг</h3>
        </div>
        <div className={classnames(styles.flex, styles.align)}>
          <div className={classnames(styles.rect)}></div> <h3>Пятница</h3>
        </div>
        <div className={classnames(styles.flex, styles.align)}>
          <div className={classnames(styles.rect)}></div> <h3>Суббота</h3>
        </div>
        <div className={classnames(styles.flex, styles.align)}>
          <div className={classnames(styles.rect)}></div> <h3>Воскресенье</h3>
        </div>
      </div>
    </div>
  );
};
