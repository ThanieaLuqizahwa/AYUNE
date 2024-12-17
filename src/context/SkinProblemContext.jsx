import React, { createContext, useContext, useState } from "react";

// Membuat Context
const SkinProblemContext = createContext();

// Custom hook agar lebih mudah digunakan
export const useSkinProblem = () => {
  return useContext(SkinProblemContext);
};

// Provider untuk membungkus komponen
export const SkinProblemProvider = ({ children }) => {
  const [skinType, setSkinType] = useState("");         // Tipe Kulit
  const [skinProblem, setSkinProblem] = useState("");   // Masalah Kulit
  const [age, setAge] = useState("");                   // Usia

  return (
    <SkinProblemContext.Provider
      value={{
        skinType,
        setSkinType,
        skinProblem,
        setSkinProblem,
        age,
        setAge,
      }}
    >
      {children}
    </SkinProblemContext.Provider>
  );
};
