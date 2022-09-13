import "../App.css";

import React, { useState } from "react";


const Login = () => {

  const [userInfo, setUserName] = useState({
    username: "",
    password: "",
  });
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <h2 className="formheader form">Login </h2>
      <form className="form" onSubmit={handleSubmit}>
        <br />
        <br />
        <div className="select">
        
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Choose Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <br />
        <div>
          <input
            id="username"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setUserName({ ...userInfo, username: e.target.value })
            }
          />
        </div>
        <br />
        <div>
          <input
            id="password"
            type="text"
            placeholder="Password"
            onChange={(e) =>
              setUserName({ ...userInfo, password: e.target.value })
            }
          />
        </div>
        <br />
        <br />
        <button className="filterButton primary-button">Login</button>
      </form>
      <br />
    </>
  );
};
export default Login;
