import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    (async function () {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategories(categoriesMap);
    })();
  }, []);

  const value = { categories };

  return (
  <CategoriesContext.Provider value={value}>
    {children}
  </CategoriesContext.Provider>
);
};
