import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "./LogoutModal/LogoutModal";
import AboutItemModal from "./AboutItemModal/AboutItemModal";
import AdditivesModal from "./AdditivesModal/AdditivesModal";

const Modals = () => {
  const { isModalOpen, currentModal, modalProps } = useSelector(
    (state) => state.modal
  );

  const ModalsMap = {
    LogoutModal: LogoutModal,
    AboutItemModal: AboutItemModal,
    AdditivesModal: AdditivesModal,
  };

  // const ModalComponent = currentModal ? ModalsMap[currentModal] : null;

  // return isModalOpen && ModalComponent ? (
  //   <ModalComponent {...modalProps} />
  // ) : null;

  return currentModal ? ModalsMap[currentModal](modalProps) : null;
};

export default Modals;
