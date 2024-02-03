import React from "react";
import styles from "./AuthLayout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
