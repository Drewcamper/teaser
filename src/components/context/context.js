import React, { createContext, useState } from "react";
import ReusableComponents from "../techStack/react/ReusableComponents";
export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [content, setContent] = useState(<ReusableComponents />);

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
