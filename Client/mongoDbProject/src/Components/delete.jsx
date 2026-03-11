import { useState } from "react";
import axios from "axios";

const Delete = () => {
  const [id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `http://localhost:5000/api/deleteUser/${id}`,
      );

      console.log(res.data);
      alert("User Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Delete User</h3>

      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Enter User ID"
          className="form-control mb-3"
          onChange={(e) => setId(e.target.value)}
        />

        <button className="btn btn-danger">Delete User</button>
      </form>
    </div>
  );
};

export default Delete;
