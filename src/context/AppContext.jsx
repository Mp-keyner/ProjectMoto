import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [people, setPeople] = useState({
    name: {
      chil: "Este",
    },
  });
  return (
    <AppContext.Provider
      value={{
        people,
        setPeople,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
