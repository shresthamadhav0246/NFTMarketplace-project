// frontend/pages/create.js

import { useState } from "react";
import { createUser } from "../utils/api";

const CreateUser = () => {
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { address, username, email };
    const newUser = await createUser(userData);
    console.log("Created User:", newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
