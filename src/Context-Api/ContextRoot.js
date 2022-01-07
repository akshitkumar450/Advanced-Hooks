import React, { useContext } from "react";
import Child from "./Child";
import context from "./Context";

function ContextRoot() {
  // consuming the context value
  const value = useContext(context);
  console.log(value);
  return (
    <div>
      <h2>context api {value}</h2>
      {/*setting and providing the value to Child component */}
      <context.Provider value={"hello  ji"}>
        <Child />
      </context.Provider>
    </div>
  );
}

export default ContextRoot;
