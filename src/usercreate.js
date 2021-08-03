import React, { useContext, useState } from "react";
import UserContext from "./userContext";

export default function Usercreate({ history }) {
  let userData = useContext(UserContext);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  //const [password, setpassword] = useState("");

  let userSubmit = async (e) => {
    e.preventDefault();
    console.log({
      id,
      name,
      email,
    });

    await fetch("https://60868bcca3b9c200173b633b.mockapi.io/user", {
      method: "POST",
      body: JSON.stringify({
        id,
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    userData.setUserList([...userData.userList, {}]);
    history.push("/userlist");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => userSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <h1>User Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">Id</label>
            <input
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="username">Name</label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">E-Mail</label>
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
