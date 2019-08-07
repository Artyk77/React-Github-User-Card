import React from "react";
import { FollowerCard } from "./Card";
import Card from "./Card";

const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      <Card user={props.dataProp} />
      <div className="followers">
        <h2>My Followers:</h2>
        {props.followerProp.map(follower => {
          return <FollowerCard key={follower.id} user={follower} />;
        })}
      </div>
    </div>
  );
};

export default CardList;