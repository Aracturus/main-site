import React from "react";

const User = (props) => {
  return (
    <>
      <div className="user">
        <img
          src={props.src}
          className="img-fluid user-img"
          alt="user_picture"
        />
        <p className="user-text">{props.children}</p>
      </div>
    </>
  );
};

export default User;
