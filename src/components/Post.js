import React from "react";

export default (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
      <hr />
    </div>
  );
};
