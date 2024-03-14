import React from "react";
import { Route, Routes } from "react-router-dom";
import { BASE_ROUT_COLLECTION } from "./routes";

const MainRoutes = () => {
  return (
    <Routes>
      {BASE_ROUT_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem.id} />;
      })}
    </Routes>
  );
};
export default MainRoutes;
