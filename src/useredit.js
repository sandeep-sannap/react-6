import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function Useredit(props) {
  const id = props.match.params.id;
  const history = useHistory();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  let userSubmit = async (e) => {
    e.preventDefault();

    let user = await fetch(
      `https://60868bcca3b9c200173b633b.mockapi.io/user/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    history.push("/userlist");
  };

  useEffect(async () => {
    let user = await fetch(
      `https://60868bcca3b9c200173b633b.mockapi.io/user/${props.match.params.id}`
    );
  }, []);

  return (
    <div className="container">
      <form onSubmit={(e) => userSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <h1>User Edit Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">Id</label>
            <input disabled className="form-control" value={id} />
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
