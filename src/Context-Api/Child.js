import React, { useContext } from "react";
import context from "./Context";

function Child() {
  const value = useContext(context);
  console.log(value);

  //   using the updated value of context
  return (
    <div>
      <h2>
        Child
        {value.toggle && " child"}
      </h2>
      <button onClick={value.handleToggle}>toggle</button>
    </div>
  );
}

export default Child;
