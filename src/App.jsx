import React from "react";
import MainRoutes from "./routes/MainRoutes";
import CodeForm from "./components/CodeForm/CodeForm";
import { useSelector } from "react-redux";
import Modals from "./components/Modals";

const App = () => {
  const { currentModal } = useSelector((state) => state.modal);
  return (
    <div>
      <MainRoutes />
      {currentModal ? <Modals /> : null}
    </div>
  );
};

export default App;
