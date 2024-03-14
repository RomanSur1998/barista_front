import React from "react";
import styles from "./AuthForm.module.css";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import LogoHeader from "../LogoHeader/LogoHeader";
import classnames from "classnames";

const AuthForm = () => {
  return (
    <AuthLayout>
      <LogoHeader />
      <form action="" className={classnames(styles.flex)}>
        <h2 className={classnames(styles.title)}>Вход</h2>
        <div className={classnames(styles.flex, styles.inputContainer)}>
          <input
            className={classnames(styles.input)}
            type="text"
            placeholder="Введите email"
          />
          <button className={classnames(styles.button)}>Получить вход</button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default AuthForm;
