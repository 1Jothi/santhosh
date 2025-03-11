import React, { useState } from "react";
import { addUser } from "../services/userService";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email };
    await addUser(user);
    alert("User added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
