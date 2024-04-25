import React, { createContext, useEffect, useState } from "react";

export const SharedParentContext = createContext();

export const SharedParentProvider = ({ children }) => {
  const [discount, setDiscount] = useState(0);
  const [popular, setPopular] = useState(false);
  const [limitedEdition, setLimitedEdition] = useState(false);
  const [search, setSearch] = useState(''); 
  const [refresh, setRefresh] = useState(false);



  return (
    <SharedParentContext.Provider value={{ discount, setDiscount, popular, setPopular,setLimitedEdition, limitedEdition, setSearch, search, setRefresh, refresh }}>
      {children}
    </SharedParentContext.Provider>
  );
};
