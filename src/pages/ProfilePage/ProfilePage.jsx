import React from "react";
import MainRoutes from "../../routes/MainRoutes";
import MainLayout from "../../layout/MainLayout/MainLayout";
import PersonalData from "../../components/PersonalData/PersonalData";

const ProfilePage = () => {
  return (
    <MainLayout>
      <>
        <PersonalData />
      </>
    </MainLayout>
  );
};

export default ProfilePage;
