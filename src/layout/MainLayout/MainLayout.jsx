import React from "react";
import styles from "./MainLayout.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <SideBar />
      <main>
        <Header />
        <section className={styles.postionContainer}>
          {/* <section className={styles.tableContainer}> */}
          {children}
          {/* <div className={styles.myPagination}></div> */}
          {/* </section> */}
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
