import React, { useCallback, useEffect, useState } from "react";

const functions = new Set();

function UseCallback1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   these will be also redefine at every single render and will generate a new functionand thus will be added to set as at every render it is a new function

  //   can be avoided by useCallback

  //   the function inside the useCallback will redefine if the dependency is changes otherwise it will use the memoize verison of the function
  const increment1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const increment2 = useCallback(() => setCount2(count2 + 1), [count2]);

  //   this function will be generated new at every single time and it will be added in the set even if the function is same ,,but at every render its reference in the memory is not same

  //   this can be avoided by useCallback hook which is used to memoize the function
  const logName = useCallback(() => console.log("render"), []);

  functions.add(increment1);
  functions.add(increment2);
  //   functions.add(logName);
  console.log(functions);

  return (
    <div>
      <h2>Usecallback hook</h2>
      count1 :{count1}
      <br />
      count2 :{count2}
      <button onClick={increment1}>count1</button>
      <button onClick={increment2}>count2</button>
      <button onClick={logName}>logName run</button>
    </div>
  );
}

export default UseCallback1;
