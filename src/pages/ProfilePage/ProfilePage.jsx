import React from "react";
import MainRoutes from "../../routes/MainRoutes";
import MainLayout from "../../layout/MainLayout/MainLayout";
import PersonalData from "../../components/PersonalData/PersonalData";
import { ScheduleData } from "../../components/ScheduleData/ScheduleData";

const ProfilePage = () => {
  return (
    <MainLayout>
      <>
        {/* <PersonalData /> */}
        <ScheduleData />
      </>
    </MainLayout>
  );
};

export default ProfilePage;
