import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("parent");
  const [name, setName] = useState("hello");
  const [personObj, setPersonObj] = useState({
    name: "hello",
    age: 12,
  });
  return (
    <div>
      {/**passing personObj as prop to child component 
    
        in this we are referring to same personObj state which is defined once in memory so using React.memo in child component it will not rerender if the props are not changes
        <Child personObj={personObj} />
    */}

      {/*
        but if we defining the object (with inline array or functions bcz they will also redefine at every render)
            personObj={{
        name: "hello",
        age: 12,
        }} inline as a prop ,,after every render that prop object will redefine and the child component will render again even if we are using React.memo,,bcz when the prop object redefine our child component receives a new prop and if we have a new prop the component will render even with React.memo
        */}

      {/**
        * 
        conclusion:if we are defining inline object,arrays,or functions and passing them as a prop to other components ,,that child comonent will render again even with React.memo()
        bcz  inline object,arrays,or functions are redefine at every single render 
        */}

      <Child personObj={personObj} />
      <button onClick={() => setName(name + 1)}>Change</button>
    </div>
  );
}

export default Parent;
