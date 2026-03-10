import axios from "axios";
import { useState } from "react";

const Post = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      gender,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/post", data);
      console.log(res.data);
      alert("User created successfully");
      setName("");
      setEmail("");
      setPassword("");
      setGender("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-3">Create User</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
