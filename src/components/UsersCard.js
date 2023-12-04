import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteUserMutation } from "../redux/usersApi";
import { add, removeUser } from "../redux/userSlice";
import UserDetails from "./UserDetails";

const UsersCard = ({ usersData }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const [deleteUser] = useDeleteUserMutation();

  useEffect(() => {
    dispatch(add(usersData));
  }, [dispatch, usersData]);

  const handleDelete = async (id) => {
    try {
      await deleteUser({ id: id });
    } catch (error) {
      console.log(error);
    }
    dispatch(removeUser(id));
  };

  const handleEdit = (user) => {
    console.log(user);
  };

  return (
    <>
      {data &&
        data.map((user) => (
          <UserDetails
            key={user.id}
            user={user}
            deleteUser={handleDelete}
            editUser={handleEdit}
          />
        ))}
    </>
  );
};

export default UsersCard;
