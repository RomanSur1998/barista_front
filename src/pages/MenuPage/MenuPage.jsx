import React from "react";
import styles from "./MenuPage.module.css";
import MainLayout from "../../layout/MainLayout/MainLayout";
import classnames from "classnames";

const MenuPage = () => {
  return (
    <MainLayout>
      <section className={classnames(styles.container)}>MenuPage</section>
    </MainLayout>
  );
};

export default MenuPage;
