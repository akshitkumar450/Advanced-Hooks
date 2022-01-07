import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function UseEffectuseLayout() {
  const h1Ref = useRef();
  const [val, setVal] = useState(false);
  // this will run after the DOM is painted
  useEffect(() => {
    console.log("effect");
    // this will change the color after the dom is rendered ,we will see the default bg color (red) of h1  and a flash changes to blue as it will be changed after the dom is loaded
    h1Ref.current.style.backgroundColor = "blue";
  }, []);

  // this will run before the DOM is painted
  useLayoutEffect(() => {
    console.log("layout run");
    // this will change the color before the dom is rendered ,we will not see the default bg color of h1 as it will be changed before the dom is loaded
    // h1Ref.current.style.backgroundColor = "blue";
  }, []);
  return (
    <div>
      <h1 ref={h1Ref} onLoad={console.log("DOM rendered")}>
        Hello world
      </h1>
      <button onClick={() => setVal(!val)}>Togglew</button>
    </div>
  );
}

export default UseEffectuseLayout;
