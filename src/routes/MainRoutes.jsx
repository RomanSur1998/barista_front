import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BASE_ROUT_COLLECTION, PRIVATE_ROUT_COLLECTION } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setAccessToken } from "../redux/slices/authSlice";

const MainRoutes = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(accessToken, "ACCESTOKEN");

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    dispatch(setAccessToken(accessToken));
  }, []);
  return (
    <Routes>
      {BASE_ROUT_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem.id} />;
      })}
      {accessToken
        ? PRIVATE_ROUT_COLLECTION.map((elem) => {
            return (
              <Route path={elem.link} element={elem.element} key={elem.id} />
            );
          })
        : null}
    </Routes>
  );
};
export default MainRoutes;
