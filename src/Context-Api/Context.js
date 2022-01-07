import React, { createContext } from "react";

const context = createContext({
  toggle: true,
  handleToggle: () => {}, //provide empty function so that we can redefine it
});

export default context;
