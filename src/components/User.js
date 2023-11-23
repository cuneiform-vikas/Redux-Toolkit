import React from "react";
import { useLocation } from "react-router-dom";
import { useGetUserQuery } from "../redux/users";

const User = () => {
  const location = useLocation();

  const { isLoading, data, error } = useGetUserQuery(location.pathname);

  return (
    <div>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="user-details">
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default User;
