import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../assets";
import styles from "./MenuTypeItems.module.css";
import { getCategories } from "../../redux/actions/categoryAction";

const MenuTypeItems = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

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
      {/* //   {data.map((item) => (
    //     <div key={item.id} className={styles.item_wrapper}>
    //       <img src={item.img} alt={item.title} />
    //       <p className={styles.item_title}>{item.title}</p>
    //     </div>
    //   ))} */}
      {categories.map((category) => (
        <div key={category.id} className={styles.item_wrapper}>
          {/* <img src={item.img} alt={item.title} /> */}
          <p className={styles.item_title}>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuTypeItems;
