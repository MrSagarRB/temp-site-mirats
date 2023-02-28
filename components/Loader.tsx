import React from "react";

const Loader = () => {
  return (
    <div className="wrapper">
      <span className="dot loader"></span>
      <div className="dots">
        <span className="loader"></span>
        <span className="loader"></span>
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loader;
