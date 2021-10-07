import React from "react";
import User from "./User";
import userone from "./images/userone.png";
import usertwo from "./images/usertwo.png";
import userthree from "./images/userthree.png";

const Clients = () => {
  return (
    <>
      <div className="profile-bg mt-lg-4 mb-lg-5">
        <div className="container d-flex justify-content-lg-center align-items-center">
          {/* first user */}

          <User src={userone}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </User>

          {/* second user */}

          <User src={usertwo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </User>

          {/* third user */}

          <User src={userthree}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </User>
        </div>
      </div>
    </>
  );
};

export default Clients;
