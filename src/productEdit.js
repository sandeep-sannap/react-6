import React from "react";

export default function ProductEdit(props) {
  console.log(props);
  return (
    <div>
      <h1>Product Edit{props.match.params.id}</h1>
    </div>
  );
}
