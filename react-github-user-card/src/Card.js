import React from "react";

const Card = props => {
    return (
        <div className="card">
            <h1 className="my-title">{props.user.name}</h1>
            <img src={props.user.avatar_url} alt="" />
            <div className="profile-info">
                <p>Location: {props.user.location}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
                <p>Bio: {props.user.bio}</p>
            </div>
        </div >
    );
};

export const FollowerCard = props => {
    return (
        <div className="follower-card">
            <h1 className="title">{props.user.login}</h1>
            <img className="image" src={props.user.avatar_url} alt="" />
        </div>
    );
};

export default Card;