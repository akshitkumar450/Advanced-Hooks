import React, { useCallback, useEffect, useState } from "react";

function UseCallback() {
  const [val, setVal] = useState(false);
  const [val1, setVal1] = useState(false);

  //   if we want to define our function inside the component and it has dependent of the props or state use useCallback Hook

  // it will use the memoize version of the callback fuction
  // the function only reinitialzes if the dependency  array value in the useCallback changes
  //   it stores the function defination through out re-renders
  //   it will give a new function or reinitialize the function when the dependency value changes in usecallback and if our function reinitialzes our useEffect will run again as it is dependent of the function
  //   for eg-if our val dependecny changes then only the function will redefine otherwise it will use the stored version of the function only

  const logMessage = useCallback(() => {
    console.log("hello", val);
  }, [val]);

  useEffect(() => {
    logMessage();
  }, [logMessage]);

  return (
    <div>
      <h2>useCallback</h2>
      <button onClick={() => setVal(!val)}>toggle 1</button>
      <button onClick={() => setVal1(!val1)}>toggle 2</button>
    </div>
  );
}

export default UseCallback;
