import React, { createContext, useState, useContext } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [summary, setSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);

  return (
    <DashboardContext.Provider value={{ summary, setSummary, transactions, setTransactions }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
