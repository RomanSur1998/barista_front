import * as yup from "yup";

export const shemas = {
  authForm: yup.object({
    email: yup.string().required().min(2).email(),
  }),
  loginForm: yup.object({
    identifier: yup.string().required(),
    password: yup.string().required().min(5),
  }),
};
