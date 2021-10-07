import React from "react";

const Brand = (props) => {
  return (
    <>
      <span style={{ width: "20%" }} className={props.class}>
        {props.name}
      </span>
    </>
  );
};

export default Brand;
