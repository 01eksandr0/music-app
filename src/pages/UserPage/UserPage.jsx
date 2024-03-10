import React from "react";
import { UserInfo } from "../../components/UserInfo/UserInfo";

import { Auth } from "../../components/Auth/Auth";
import { useSelector } from "react-redux";
import { getUsers } from "../../redux/selectors";

export const UserPage = () => {
  const { token } = useSelector(getUsers);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {token ? <UserInfo /> : <Auth />}
    </div>
  );
};
