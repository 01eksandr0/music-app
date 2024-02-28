import React from "react";
import { LineWave } from "react-loader-spinner";

export const Loader = () => {
  return (
    <LineWave
      visible={true}
      height="200"
      width="200"
      color="#4fa94d"
      ariaLabel="line-wave-loading"
      wrapperStyle={{ margin: "10px 100px" }}
      wrapperClass=""
      firstLineColor="#fff"
      middleLineColor="#fff"
      lastLineColor="#fff"
    />
  );
};
