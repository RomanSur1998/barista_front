import { useFormik } from "formik";
import React from "react";
import { useOtpInput } from "react-otp-input-hook";
import styles from "./CodeForm.module.css";
import * as yup from "yup";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { codeConfirm } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const CodeForm = () => {
  const disptch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "romansurkov87@gmail.com",
      code: "",
    },
    onSubmit: (values) => {
      console.log(values.code);
      disptch(codeConfirm({ data: values, navigate }));
    },
    validationSchema: yup.object({
      code: yup.string().required().min(4).max(4),
    }),
  });

  const { register } = useOtpInput({
    onInputValueChange: (value) => {
      formik.setFieldValue("code", value);
    },
    numberOfInputs: 4,
    defaultInlineStyles: {
      width: "66px",
      height: "66px",
      fontSize: "32px",
      backgroundColor: "#EBEFF2",
      borderRadius: "10px",
      outline: "none",
      border: false ? "2px solid #f45656" : "none",
      textAlign: "center",
      color: false ? "#f45656" : null,
    },
    placeholder: "_",
  });

  const defaultOptions = { required: true };

  return (
    <AuthLayout>
      <div className={styles.CodeFormContainer}>
        <form
          onSubmit={formik.handleSubmit}
          className={classnames(styles.form)}
        >
          <div className={classnames(styles.text_block)}>
            <h2>Код подтверждения</h2>
            {false ? (
              <span className={classnames(styles.text)}>
                Код неверный , попробуйте еще раз
              </span>
            ) : null}
          </div>

          <div className={styles.otpContainer}>
            <input {...register("digit-1", defaultOptions)} />
            <input {...register("digit-2", defaultOptions)} />
            <input {...register("digit-3", defaultOptions)} />
            <input {...register("digit-4", defaultOptions)} />
          </div>
          <button className={classnames(styles.button)} type="submit">
            Войти
          </button>
        </form>
        <button className={classnames(styles.send, { [styles.error]: true })}>
          Отправить еще раз
        </button>
      </div>
    </AuthLayout>
  );
};

export default CodeForm;
