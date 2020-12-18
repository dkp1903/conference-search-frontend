import React from "react";
import loading from "../images/loading.gif";

const Loader = () => {
  return (
    <img
      src={loading}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Loader;
