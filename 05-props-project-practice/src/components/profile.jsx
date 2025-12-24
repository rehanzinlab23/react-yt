import React from "react";

const Profile = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <span className="badge">{props.status}</span>
        <span className="price">${props.rate}/hr</span>
      </div>

      <div className="avatar">
        <img src={props.image} alt={props.name} />
      </div>

      <h2>{props.name}</h2>
      <p className="role">{props.role}</p>

      <div className="company">
        <img src={props.companyImage} alt="company" />
        <span>{props.company}</span>
      </div>

      <div className="tags">
        {props.skills.slice(0, 2).map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
        {props.skills.length > 2 && (
          <span className="more">+{props.skills.length - 2}</span>
        )}
      </div>

      <p className="desc">{props.bio}</p>
      <button className="btn">VIEW PROFILE</button>
    </div>
  );
};

export default Profile;
