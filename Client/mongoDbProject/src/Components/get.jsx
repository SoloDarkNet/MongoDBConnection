import { useState } from "react";
import axios from "axios";

const Get = () => {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const user = await axios.get("http://localhost:5000/api/getuser");
    console.log(user);
    setData(user.data);
  };
  return (
    <>
      <h2>Get User</h2>
      <button onClick={getUsers}>Get</button>
      {data.map((user) => (
        <div key={user._id}>
          <p>{user._id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      ))}
    </>
  );
};

export default Get;
