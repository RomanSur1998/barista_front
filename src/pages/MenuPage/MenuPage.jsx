import React from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import classnames from "classnames";
import MenuCard from "../../components/MenuCard/MenuCard";
import { images } from "../../assets";
import MenuTypeItems from "../../components/MenuTypeItems/MenuTypeItems";
import { showModal } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import styles from "./MenuPage.module.css";

const MenuPage = () => {
  const menuItem = [
    {
      id: 1,
      img: images.coffeeImg,
      title: "Капучино",
      price: "140 c",
    },
    {
      id: 2,
      img: images.coffeeImg,
      title: "Капучино",
      price: "140 c",
    },

    {
      id: 3,
      img: images.coffeeImg,
      title: "Капучино",
      price: "140 c",
    },
    {
      id: 4,
      img: images.coffeeImg,
      title: "Капучино",
      price: "140 c",
    },
    {
      id: 5,
      img: images.coffeeImg,
      title: "Капучино",
      price: "140 c",
    },
  ];

  return (
    <MainLayout>
      <section className={classnames(styles.container)}>
        <MenuTypeItems />
        <div className={styles.menuItem_container}>
          {menuItem.map((menuItem) => (
            <MenuCard key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>

        <div className={styles.orderCheck}>
          <p className={styles.orderCheck__type}>Заказ на вынос</p>
          <p className={styles.orderCheck__price}>0 сом</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default MenuPage;
