import React, { useEffect } from "react";
import { add, removeUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import UserDetails from "./UserDetails";
import { useDeleteUserMutation } from "../redux/users";

const UsersCard = ({ usersData }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const [deleteUser] = useDeleteUserMutation();

  useEffect(() => {
    dispatch(add(usersData));
  }, []);

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
