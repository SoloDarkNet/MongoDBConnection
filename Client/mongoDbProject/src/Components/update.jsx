import { useState } from "react";
import axios from "axios";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/api/updateUser/${id}`,
        data,
      );

      console.log(res.data);
      alert("User Updated");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Update User</h3>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter User ID"
          className="form-control mb-3"
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Name"
          className="form-control mb-3"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-warning">Update User</button>
      </form>
    </div>
  );
};

export default Update;
