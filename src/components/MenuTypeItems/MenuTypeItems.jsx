import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../assets";
import styles from "./MenuTypeItems.module.css";
import { getCategories } from "../../redux/actions/menuAction";
import { setSelectedCategory } from "../../redux/slices/menuSlice";
import classnames from "classnames";

const MenuTypeItems = ({ handleCategoryChoose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.menu.categories);
  const [clickedCategory, setClickedCategory] = useState("");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClick = (category) => {
    setClickedCategory(category);
    handleCategoryChoose(category);
  };

  return (
    <div className={styles.container}>
      {categories?.map((category, index) => (
        <button
          className={classnames(styles.item_wrapper, {
            [styles.active]: clickedCategory === category,
          })}
          key={index}
          onClick={() => handleClick(category)}
          // onClick={() => handleCategoryChoose(category)}
        >
          <span className={styles.item_icon}></span>
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuTypeItems;
