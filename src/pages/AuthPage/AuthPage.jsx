import React from "react";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import CodeForm from "../../components/CodeForm/CodeForm";

const AuthPage = () => {
  return (
    <AuthLayout>
      <CodeForm />
      {/* <div>AuthPage</div> */}
    </AuthLayout>
  );
};

export default AuthPage;
