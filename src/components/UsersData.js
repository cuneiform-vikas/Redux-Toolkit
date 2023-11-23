import React from "react";
import { useGetAllUsersQuery } from "../redux/users";
import UsersCard from "./UsersCard";

const UsersData = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetAllUsersQuery();

  return (
    <main>
      <h1>User's List</h1>
      <div className="container">
        {error ? (
          <p>Oh no, there was an error</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : data ? (
          <UsersCard usersData={data} />
        ) : null}
      </div>
    </main>
  );
};

export default UsersData;
