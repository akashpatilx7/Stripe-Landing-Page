// Generated by using the Snippet "rafce" : REACT ARROW FUNCTION EXPORT FUNCTIONAL COMPONENT NAMED "APPPROVIDER"
import React, { useState, useContext } from "react";
import sublinks from "./data";
const AppContext = React.createContext();


// Destructuring the Children's as we are providing them with the Helper Methods throughout
const AppProvider = ({ children }) => {

  // Here, we are creating some Helper Methods in the Context for our ease to devleop the Landing Page, which will help us throughout the components.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubMenuOpen(false);
  };
  
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubMenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };