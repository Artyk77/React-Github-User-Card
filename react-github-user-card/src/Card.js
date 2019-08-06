import React from "react";

const Card = props => {
  return (
    <div className="card">
    <h1>{props.user.name}</h1>
      <img src={props.user.avatar_url} alt="" />
      <p>{props.user.location}</p>
      <p>{props.user.followers}</p>
      <p>{props.user.following}</p>
      <p>{props.user.bio}</p>
    </div>
  );
};

export default Card;