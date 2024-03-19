import React from "react";
import styles from "./MenuPage.module.css";
import MainLayout from "../../layout/MainLayout/MainLayout";
import classnames from "classnames";
import MenuCard from "../../components/MenuCard/MenuCard";
import { images } from "../../assets";
import MenuTypeItems from "../../components/MenuTypeItems/MenuTypeItems";

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
      </section>
    </MainLayout>
  );
};

export default MenuPage;
