import React from "react";
import { icons } from "../../assets";
import styles from "./MenuTypeItems.module.css";

const MenuTypeItems = () => {
  const data = [
    {
      id: 1,
      img: icons.coffeeBobs_icon,
      title: "Кофе",
    },
    {
      id: 2,
      img: icons.bakery_icon,
      title: "Выпечка",
    },
    {
      id: 3,
      img: icons.dessert_icon,
      title: "Десерты",
    },
    {
      id: 4,
      img: icons.cocktail_icon,
      title: "Напитки",
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.id} className={styles.item_wrapper}>
          <img src={item.img} alt={item.title} />
          <p className={styles.item_title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuTypeItems;
