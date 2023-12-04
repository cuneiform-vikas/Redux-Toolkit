import React, { useState } from "react";
import UpdateUser from "./UpdateUser";

const UserDetails = ({ user, deleteUser }) => {
  const [open, setOpen] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);

  return (
    <div
      className={
        open ? "user-card flex-col align-start" : "user-card justify-between"
      }
    >
      <h1>{user.name}</h1>

      <button onClick={() => setOpen(!open)}>{open ? "Hide" : "View"}</button>

      {open && (
        <div>
          <p>{user.email}</p>
          <p>{user.phone}</p>

          {/* Delete User button */}
          <button onClick={() => deleteUser(user.id)}>Delete</button>

          {/* Update User component */}
          <button onClick={() => setUserUpdate(!userUpdate)}>Update</button>
          {userUpdate && <UpdateUser data={user} />}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
