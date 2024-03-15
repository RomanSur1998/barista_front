import React from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import OrderCard from "../../components/OrderCard/OrderCard";

const OrdersPage = () => {
  return (
    <MainLayout>
      <div>
        <OrderCard />
      </div>
    </MainLayout>
  );
};

export default OrdersPage;
