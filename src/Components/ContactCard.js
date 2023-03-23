import React from "react";
import User from "../Images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item contactList">
      <img
        src={User}
        className="ui avtar image"
        alt="user"
        style={{ width: "35px" }}
      />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash red alternate outline icon sIcon"
        style={{ marginTop: "1rem" }}
      ></i>
    </div>
  );
};

export default ContactCard;
