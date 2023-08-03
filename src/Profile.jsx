import React from "react";
import { Colorgame } from "./App";
import { Counter } from "./Counter";

export function Profile({ Name, image }) {
  return (
    <div className="profile">
      <img className="pic" src={image} />
      <h2>hello {Name}</h2>
      <Counter />
      <Colorgame />
    </div>
  );
}
