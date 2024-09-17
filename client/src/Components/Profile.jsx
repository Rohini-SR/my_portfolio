import React from "react";
import "./profile.css";
import me from "../assets/me2.jfif";

const Profile = () => {
  return (
    <div className="profile_center">
      <div className="profile_black">
        <div className="profile_intro">
          <h1> Hi, </h1>
          <h3> I'm Rohini </h3>
          <h6>
            Enthusiastic entry-level MERN stack developer with a passion for building dynamic web applications and a strong foundation in MongoDB, Express.js, React, and Node.js.
          </h6>
        </div>
      </div>
      <div className="profile_white">
        <div className="profile_img">
          <img className="pic" src={me} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
