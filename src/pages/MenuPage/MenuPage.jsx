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

const MenuPage = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products.data);

  const handleShowSidebar = () => {
    dispatch(showModal({ modalType: "RightSideBar" }));
  };

  const handleCategoryChoose = (category) => {
    dispatch(getProductsInMenu(category));
  };

  // const menuItem = [
  //   {
  //     id: 1,
  //     img: images.coffeeImg,
  //     title: "Капучино",
  //     price: "140 c",
  //   },
  //   {
  //     id: 2,
  //     img: images.coffeeImg,
  //     title: "Капучино",
  //     price: "140 c",
  //   },

  //   {
  //     id: 3,
  //     img: images.coffeeImg,
  //     title: "Капучино",
  //     price: "140 c",
  //   },
  //   {
  //     id: 4,
  //     img: images.coffeeImg,
  //     title: "Капучино",
  //     price: "140 c",
  //   },
  //   {
  //     id: 5,
  //     img: images.coffeeImg,
  //     title: "Капучино",
  //     price: "140 c",
  //   },
  // ];

  return (
    <MainLayout>
      <section className={classnames(styles.container)}>
        <MenuTypeItems handleCategoryChoose={handleCategoryChoose} />
        <div className={classnames(styles.menuItem_container)}>
          {/* <MenuCard products={products} /> */}
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
