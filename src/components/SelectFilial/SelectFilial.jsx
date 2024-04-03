import React, { useEffect, useState } from "react";
import styles from "./SelectFilial.module.css";
import classnames from "classnames";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import { icons } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { getFilialName } from "../../redux/actions/authAction";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const SelectFilial = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [filial, setFilial] = useState("Выберите филилал");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filialList } = useSelector((state) => state.auth);
  console.log(filialList, "list");

  useEffect(() => {
    dispatch(getFilialName());
  }, []);

  function handleOpen() {
    setIsOpenSelect((prev) => !prev);
  }

  function setFilialName(item, id) {
    setFilial(item);
    setId(id);

    handleOpen();
  }

  function setInCookies() {
    if (id) {
      Cookies.set("id", id);
      navigate("/orders");
    }
  }

  return (
    <AuthLayout>
      <h2 className={classnames(styles.title)}>
        Выберите филиал в котором работаете{" "}
      </h2>
      <div className={classnames(styles.container, styles.flex)}>
        {isOpenSelect ? (
          <ul className={classnames(styles.options, styles.background)}>
            <li
              className={classnames(styles.option_item, styles.flex)}
              onClick={handleOpen}
            >
              {filial} <img src={icons.arrow_icon} alt="" />
            </li>
            {filialList?.map((item) => {
              return (
                <li
                  key={item.id}
                  className={classnames(styles.option_item, styles.flex)}
                  onClick={() => {
                    setFilialName(item?.name, item?.id);
                  }}
                >
                  {item?.name}
                </li>
              );
            })}
          </ul>
        ) : (
          <button
            onClick={handleOpen}
            className={classnames(
              styles.background,
              styles.width,
              styles.flex,
              styles.align
            )}
          >
            {filial}
            <img src={icons.arrow_icon} alt="" />
          </button>
        )}
      </div>
      <button className={classnames(styles.button)} onClick={setInCookies}>
        Добавить и пройти дальше
      </button>
    </AuthLayout>
  );
};
