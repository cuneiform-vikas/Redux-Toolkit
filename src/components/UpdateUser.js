import React, { useState } from "react";
import { useUpdateUserMutation } from "../redux/usersApi";
import { useDispatch } from "react-redux";
import { updateUserData } from "../redux/userSlice";

const UpdateUser = ({ data }) => {
  const [user, setUser] = useState({
    id: data.id,
    name: data.name,
    email: data.email,
    phone: data.phone,
  });

  const dispatch = useDispatch();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const submitButton = async (event) => {
    event.preventDefault();
    try {
      await updateUser(user);
    } catch (error) {
      console.log(error);
    }

    dispatch(updateUserData(user));

    setUser({
      id: "",
      name: "",
      email: "",
      phone: "",
    });
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
        value={isLoading ? "Wait..." : "Update Details"}
        disabled={isLoading}
      />
    </form>
  );
};

export default UpdateUser;
