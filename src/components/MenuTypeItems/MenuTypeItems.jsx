import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../assets";
import styles from "./MenuTypeItems.module.css";
import { getCategories } from "../../redux/actions/categoryAction";

const MenuTypeItems = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories.data);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
      {categories?.map((category, index) => (
        <div className={styles.item_wrapper} key={index}>
          <div className={styles.item_icon}></div>
          <p className={styles.item_title}>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuTypeItems;
