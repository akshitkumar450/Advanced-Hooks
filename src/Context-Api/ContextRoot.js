import React, { useContext, useState } from "react";
import Child from "./Child";
import context from "./Context";

function ContextRoot() {
  // consuming the context value
  const value = useContext(context);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle(!toggle);
  console.log(value);
  return (
    <div>
      <h2>context api {value.toggle && "how are you"}</h2>
      {/*setting and providing the value to Child component 
        passing the states and fn to context and 
        redefining the initial values of context
      */}
      <context.Provider
        value={{
          toggle,
          handleToggle,
        }}>
        <Child />
      </context.Provider>

      {/*
         changing the context values from anywhere will reflect here
         */}
      <h2>Parent {toggle && "Parent"}</h2>
    </div>
  );
}

export default ContextRoot;
