// UserContext.js
import React, { createContext, useContext, useState } from 'react';
import { profiledata } from './data';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [datas, setdatas] = useState(profiledata);
    const [completed, setCompleted] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  
  const handleTaskClick = (data) => {
    const isIndatas = datas.some((t) => t.id === data.id);

    if (isIndatas) {
      const updateddata = datas.filter((t) => t.id !== data.id);
      setCompleted([...completed, data]);
      setdatas(updateddata);
    } else {
      const updatedCompleted = completed.filter((t) => t.id !== data.id);
      setdatas([...datas, data]);
      setCompleted(updatedCompleted);
    }

    setSearchTerm('');
  };

  const contextValue = {
    isInputFocused,
    handleInputFocus,
    datas,
    completed,
    handleTaskClick,
    searchTerm,
    setSearchTerm,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
