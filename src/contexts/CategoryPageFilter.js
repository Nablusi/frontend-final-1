import React, { createContext, useEffect, useState } from "react";

export const SharedParentContext = createContext();

export const SharedParentProvider = ({ children }) => {
  const [discount, setDiscount] = useState(0);
  const [popular, setPopular] = useState(false);
  const [limitedEdition, setLimitedEdition] = useState(false);
  const [search, setSearch] = useState(''); 

  return (
    <SharedParentContext.Provider value={{ discount, setDiscount, popular, setPopular,setLimitedEdition, limitedEdition, setSearch, search }}>
      {children}
    </SharedParentContext.Provider>
  );
};
