import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};
