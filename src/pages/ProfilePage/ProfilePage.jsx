import { useEffect } from "react";
import MainLayout from "../../layout/MainLayout/MainLayout";
import PersonalData from "../../components/PersonalData/PersonalData";
import { ScheduleData } from "../../components/ScheduleData/ScheduleData";
import { useDispatch, useSelector } from "react-redux";
import { setSwitchValue } from "../../redux/slices/dataSlice";
import { getProfile } from "../../redux/actions/dataAction";

const ProfilePage = () => {
  const { switchValue, profile } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSwitchValue("График работы"));
  }, []);

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <MainLayout>
      <>
        {switchValue === "График работы" ? (
          <PersonalData data={profile} />
        ) : (
          <ScheduleData data={profile} />
        )}
      </>
    </MainLayout>
  );
};

export default ProfilePage;
