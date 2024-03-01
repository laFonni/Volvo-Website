import { createContext } from "react";

const IsOpenContext = createContext();

export const IsOpenProvider = (children) => {
  return (
    <IsOpenContext.Provider value={{ isOpen: 1 }}>
      {children}
    </IsOpenContext.Provider>
  );
};

export default IsOpenContext;
