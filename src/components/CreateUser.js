import React from "react";
import { useAddNewUserMutation } from "../redux/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { setUser } from "../redux/formSlice";

const CreateUser = () => {
  const [addNewUser, { isLoading }] = useAddNewUserMutation();

  const usersData = useSelector((state) => state.users);
  const user = useSelector((state) => state.form);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ name, value }));
  };

  const submitButton = async (event) => {
    event.preventDefault();
    try {
      await addNewUser({ id: usersData.length + 1, ...user });
    } catch (error) {
      console.log(error);
    }

    dispatch(addUser({ id: usersData.length + 1, ...user }));
  };

  return (
    <form onSubmit={submitButton}>
      <input
        type="text"
        placeholder="Type your name"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        placeholder="Type your email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        placeholder="Type your phone number"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
        required
      />
      <input
        type="submit"
        value={isLoading ? "Wait..." : "Add New User"}
        disabled={isLoading}
      />
    </form>
  );
};

export default CreateUser;
