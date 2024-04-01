import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../assets";
import styles from "./MenuTypeItems.module.css";
import { getCategories } from "../../redux/actions/categoryAction";
import { setSelectedCategory } from "../../redux/slices/categorySlice";

const MenuTypeItems = ({ handleCategoryChoose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const selectedCategoryItem = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {categories?.map((category, index) => (
        <div
          className={styles.item_wrapper}
          key={index}
          onClick={() => handleCategoryChoose(category)}
        >
          <div className={styles.item_icon}></div>
          <p className={styles.item_title}>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuTypeItems;
