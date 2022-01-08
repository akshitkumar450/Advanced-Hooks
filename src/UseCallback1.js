import React, { useCallback, useEffect, useState } from "react";

const functions = new Set();

function UseCallback1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => setCount1(count1 + 1);
  const increment2 = () => setCount2(count2 + 1);

  //   this function will be generated new at every single time and it will be added in the set even if the function is same ,,but at every render its reference in the memory is not same

  //   this can be avoided by useCallback hook which is used to memoize the function
  const logName = useCallback(() => console.log("render"), []);

  functions.add(logName);
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
