import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import PersonalData from "../../components/PersonalData/PersonalData";
import { ScheduleData } from "../../components/ScheduleData/ScheduleData";
import { useDispatch, useSelector } from "react-redux";
import { setSwitchValue } from "../../redux/slices/dataSlice";

const ProfilePage = () => {
  const { switchValue } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSwitchValue("График работы"));
  }, []);
  return (
    <MainLayout>
      <>
        {switchValue === "График работы" ? <PersonalData /> : <ScheduleData />}
      </>
    </MainLayout>
  );
};

export default ProfilePage;
