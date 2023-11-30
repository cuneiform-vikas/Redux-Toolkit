import React, { useState } from "react";

const UserDetails = ({ user, deleteUser }) => {
  const [open, setOpen] = useState(false);

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
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
