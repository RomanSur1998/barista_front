import React from "react";
import styles from "./AuthForm.module.css";
import { useFormik } from "formik";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import LogoHeader from "../LogoHeader/LogoHeader";
import classnames from "classnames";
import { shemas } from "../../helpers/Shemas";

const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: shemas.authForm,
  });

  return (
    <AuthLayout>
      <LogoHeader />
      <form onSubmit={formik.handleSubmit} className={classnames(styles.flex)}>
        <h2 className={classnames(styles.title)}>Вход</h2>
        <div className={classnames(styles.flex, styles.inputContainer)}>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={classnames(styles.input, {
              [styles.error]: false,
            })}
            type="email"
            name="email"
            placeholder="Введите email"
          />
          <button type="submit" className={classnames(styles.button)}>
            Получить вход
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default AuthForm;
