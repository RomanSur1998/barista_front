import { useFormik } from "formik";
import React from "react";
import { useOtpInput } from "react-otp-input-hook";
import styles from "./CodeForm.module.css";
import * as yup from "yup";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import classnames from "classnames";

const CodeForm = () => {
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      console.log(values.code);
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
      border: "none",
      textAlign: "center",
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
          <h2>Код подтверждения</h2>
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
        <button className={classnames(styles.send)}>Отправить еще раз</button>
      </div>
    </AuthLayout>
  );
};

export default CodeForm;
