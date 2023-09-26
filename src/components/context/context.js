import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [content, setContent] = useState(undefined);

  return (
    <DataContext.Provider
      value={{
        content,
        setContent,
      }}>
      {children}
    </DataContext.Provider>
  );
};
