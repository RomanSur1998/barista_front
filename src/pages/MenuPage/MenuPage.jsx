import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import classnames from "classnames";
import MenuCard from "../../components/MenuCard/MenuCard";
import { images } from "../../assets";
import MenuTypeItems from "../../components/MenuTypeItems/MenuTypeItems";
import { showModal } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MenuPage.module.css";
import { getProductsInMenu } from "../../redux/actions/categoryAction";
import { setSelectedCategory } from "../../redux/slices/categorySlice";

const MenuPage = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.data);
  const products = useSelector((state) => state.category.products.responses);

  const handleShowSidebar = () => {
    dispatch(showModal({ modalType: "RightSideBar" }));
  };

  const handleCategoryChoose = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(getProductsInMenu(category));
  };

  return (
    <MainLayout>
      <section className={classnames(styles.container)}>
        <MenuTypeItems handleCategoryChoose={handleCategoryChoose} />
        <div className={classnames(styles.menuItem_container)}>
          <MenuCard products={products} />
        </div>

        <div className={styles.orderCheck} onClick={handleShowSidebar}>
          <p className={styles.orderCheck__type}>Заказ на вынос</p>
          <p className={styles.orderCheck__price}>0 сом</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default MenuPage;
