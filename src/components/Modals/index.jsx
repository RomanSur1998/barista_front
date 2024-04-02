import React from "react";
import { useSelector } from "react-redux";
import LogoutModal from "./LogoutModal/LogoutModal";
import AboutItemModal from "./AboutItemModal/AboutItemModal";
import AdditivesModal from "./AdditivesModal/AdditivesModal";
import RightSideBar from "../RightSideBar/RightSideBar";

const ModalsMap = {
  LogoutModal: LogoutModal,
  AboutItemModal: AboutItemModal,
  AdditivesModal: AdditivesModal,
  RightSideBar: RightSideBar,
};

const Modals = () => {
  const { isModalOpen, currentModal, modalProps } = useSelector(
    (state) => state.modal
  );

  const ModalComponent = currentModal ? ModalsMap[currentModal] : null;

  return isModalOpen && ModalComponent ? (
    <ModalComponent {...modalProps} />
  ) : null;

  // return currentModal ? ModalsMap[currentModal](modalProps) : null;
};

export default Modals;
