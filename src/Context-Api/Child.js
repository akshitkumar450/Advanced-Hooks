import React, { useContext } from "react";
import context from "./Context";

function Child() {
  const value = useContext(context);
  console.log(value);

  //   using the updated value of context
  return <div>i am child and value from parent:{value}</div>;
}

export default Child;
