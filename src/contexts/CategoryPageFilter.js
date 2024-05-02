import React, { createContext, useState, useRef } from "react";

export const SharedParentContext = createContext();

export const SharedParentProvider = ({ children }) => {
  const [discount, setDiscount] = useState(0);
  const [popular, setPopular] = useState(false);
  const [limitedEdition, setLimitedEdition] = useState(false);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [getBrand, setGetBrand] = useState([]); 


  const trendy = useRef(); 
  const handpicked = useRef(); 
  const  brands = useRef(); 


  return (
    <SharedParentContext.Provider
      value={{
        discount,
        setDiscount,
        popular,
        setPopular,
        setLimitedEdition,
        limitedEdition,
        setSearch,
        search,
        setRefresh,
        refresh,
        trendy,
        handpicked, 
        brands,
        getBrand, 
        setGetBrand
      }}
    >
      {children}
    </SharedParentContext.Provider>
  );
};
