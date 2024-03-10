import React from "react";
import css from "./UserInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/selectors";
import { logout } from "../../redux/usersSlice";

export const UserInfo = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const index = users.list.findIndex((i) => i.id === users.token);
  const thisUser = users.list[index];

  return (
    <div>
      <div className={css.info}>
        <div className={css.avatar}>{thisUser.name[0]}</div>
        <p className={css.name}>{thisUser.name}</p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
};
