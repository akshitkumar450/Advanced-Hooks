import React, { useEffect, useState } from "react";

// if the function is not dependent on any state or props and we want to use it in useEffect ,,define that function outside the component
// in this way on every render the function will not re-initialzed

// const logMessage = () => {
//   console.log("hello");
// };

function UseEffectEx() {
  const [val, setVal] = useState(false);
  // whenever our component rerenders the logMessage function is re initialized (react thing) and  and our useEffect dependency array will think that our function is changed  and it will run the useEffect

  // if we want to log logMessage function when ever the function changes ,
  useEffect(() => {
    //   or we can define in useEffect if the depending state is changes
    const logMessage = () => {
      console.log("hello", val);
    };
    logMessage();
  }, [val]);
  return (
    <div>
      <h2>useEffect</h2>
      <button onClick={() => setVal(!val)}>toggle</button>
    </div>
  );
}

export default UseEffectEx;
