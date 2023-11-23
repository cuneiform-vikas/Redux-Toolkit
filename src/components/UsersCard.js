import React from "react";
import { Link } from "react-router-dom";

const UsersCard = ({ usersData }) => {
  return (
    <>
      {usersData.map((user) => (
        <Link to={`/users/${user.id}`} className="userCard" key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </Link>
      ))}
    </>
  );
};

export default UsersCard;
