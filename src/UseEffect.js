import React, { useEffect, useState } from "react";

function UseEffectEx() {
  const [val, setVal] = useState(false);
  //   whenever our component rerenders the logMessage function is re initialized (react thing) and  and our useEffect dependency array will think that our function is changed  and it will run the useEffect
  const logMessage = () => {
    console.log("hello");
  };
  // if we want to log logMessage function when ever the function changes ,
  useEffect(() => {
    logMessage();
  }, [logMessage]);
  return (
    <div>
      <h2>useEffect</h2>
      <button onClick={() => setVal(!val)}>toggle</button>
    </div>
  );
}

export default UseEffectEx;
