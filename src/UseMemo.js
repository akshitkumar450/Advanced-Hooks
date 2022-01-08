import React, { useState } from "react";
import { useCallback } from "react/cjs/react.development";

function UseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   this will run at every render and it will redefine every time
  //   even if count2  changes this will be redefine at every render
  //   if we change count1 this will return value and log the message
  // if we change count2 this will also recompute the value and log the message
  const complex = () => {
    console.log("soemthing complex");
    return ((count1 * 1000) % 12.4) * 51000 - 4000;
  };

  const increment1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const increment2 = useCallback(() => setCount2(count2 + 1), [count2]);

  return (
    <div>
      <h2>USE-MEMO</h2>
      count1 :{count1}
      <br />
      count2 :{count2}
      <button onClick={increment1}>count1</button>
      <button onClick={increment2}>count2</button>
      complex:{complex()}
    </div>
  );
}

export default UseMemo;
