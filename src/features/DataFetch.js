import React from "react";
import { useGetAllUsersQuery } from "../redux/usersApi";
import UsersCard from "../components/UsersCard";

const DataFetch = () => {
  // Fetching users data with error handling from jsonplaceholder api
  const { data, error, isLoading } = useGetAllUsersQuery();

  return (
    <section>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <UsersCard usersData={data} />
      ) : null}
    </section>
  );
};

export default DataFetch;
