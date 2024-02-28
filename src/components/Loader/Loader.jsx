import React from "react";
import { LineWave } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        alignItems: "center",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      <LineWave
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{ margin: "10px auto" }}
        wrapperClass=""
        firstLineColor="#fff"
        middleLineColor="#fff"
        lastLineColor="#fff"
      />
    </div>
  );
};
