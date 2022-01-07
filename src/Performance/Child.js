import React from "react";

function Child({ name }) {
  console.log("child");

  return <div>{name}</div>;
}

// mounting the component for first with react memo takes longer time rather than using it with React.memo
// use only if required
export default React.memo(Child);
