import React from "react";

interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>HI, {person}</h1>;
}

export default Greeter;
