import React from "react";
import styles from "./AuthForm.module.css";
import { useFormik } from "formik";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import LogoHeader from "../LogoHeader/LogoHeader";
import classnames from "classnames";
import { shemas } from "../../helpers/Shemas";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authBarmen } from "../../redux/actions/authAction";
import Cookies from "js-cookie";

const AuthForm = () => {
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      Cookies.set("email", formik.values.email);
      dispatch(authBarmen({ data: values.email, navigate }));
    },
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
              [styles.error]: error,
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
