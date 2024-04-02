import React from "react";
import classnames from "classnames";
import styles from "./ScheduleData.module.css";

export const ScheduleData = ({ data }) => {
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
        {data?.workDays?.map((elem) => {
          return (
            <div
              className={classnames(styles.flex, styles.align)}
              key={elem.day}
            >
              <div
                className={classnames(styles.rect, {
                  [styles.color]: elem?.checked,
                })}
              ></div>{" "}
              <h3>{elem?.day}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
