import React, { useState, useEffect } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import classnames from "classnames";
import MenuCard from "../../components/MenuCard/MenuCard";
import { images } from "../../assets";
import AboutItemModal from "../../components/Modals/AboutItemModal/AboutItemModal";
import MenuTypeItems from "../../components/MenuTypeItems/MenuTypeItems";
import { showModal } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MenuPage.module.css";
import {
  getCategories,
  getProductsInMenu,
} from "../../redux/actions/menuAction";
import { setSelectedCategory } from "../../redux/slices/menuSlice";

const MenuPage = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const selectedCategory = useSelector((state) => state.data);
  const products = useSelector((state) => state.menu.products.responses);

  const handleShowSidebar = () => {
    dispatch(showModal({ modalType: "RightSideBar" }));
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    dispatch(showModal({ modalType: "AboutItemModal" }));
  };

  useEffect(() => {
    dispatch(getCategories()).then((response) => {
      if (
        response.payload &&
        response.payload.data &&
        response.payload.data.length > 0
      ) {
        const setFirstCategory = response.payload.data[0];
        dispatch(setSelectedCategory(setFirstCategory));
        dispatch(getProductsInMenu(setFirstCategory));
      }
    });
  }, [dispatch]);

  const handleCategoryChoose = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(getProductsInMenu(category));
  };

  return (
    <MainLayout>
      <section className={classnames(styles.container)}>
        <MenuTypeItems handleCategoryChoose={handleCategoryChoose} />
        <div className={classnames(styles.menuItem_container)}>
          <MenuCard products={products} handleShowModal={handleShowModal} />
        </div>
        {selectedProduct && <AboutItemModal product={selectedProduct} />}

        <div className={styles.orderCheck} onClick={handleShowSidebar}>
          <p className={styles.orderCheck__type}>Заказ на вынос</p>
          <p className={styles.orderCheck__price}>0 сом</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default MenuPage;
