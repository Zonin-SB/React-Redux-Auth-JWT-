import React, { useState, useEffect } from "react";
import "./UserHome.css";

function UserHome() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("userEmail"));
  }, []);

  return (
    <div>
      <div className="profile-wrap">
        <div class="mt-4">
          <div
            class="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2 style={{ color: "black" }}>Welcome &#160;</h2>

            <h2> &#160;</h2>
          </div>
        </div>

        <div className="Profile_photo">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="user_data">
          <p>Name: {name ? name : ""}</p>
          <p>Email: {email ? email : ""}</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "30px",
        }}
      ></div>
    </div>
  );
}

export default UserHome;
