import React, { createContext, useState, ReactNode } from "react";

interface BalancesContextType {
  ids: string[];
  addBalance: (id: string) => void;
  removeBalance: (id: string) => void;
}

export const BalancesContext = createContext<BalancesContextType | undefined>(undefined);

interface BalanceContextProviderProps {
  children: ReactNode;
}

function BalanceContextProvider({ children }: BalanceContextProviderProps) {
  const [balanceIds, setBalanceIds] = useState<string[]>([]);

  function addBalance(id: string) {
    setBalanceIds((currentBalanIds) => [...currentBalanIds, id]);
  }

  function removeBalance(id: string) {
    setBalanceIds((currentBalIds) =>
      currentBalIds.filter((balanceId) => balanceId !== id)
    );
  }

  const value: BalancesContextType = {
    ids: balanceIds,
    addBalance: addBalance,
    removeBalance: removeBalance,
  };

  return (
    <BalancesContext.Provider value={value}>
      {children}
    </BalancesContext.Provider>
  );
}

export default BalanceContextProvider;




















































// import { createContext, useState } from "react";

// export const BalancesContext = createContext({
//   ids: [],
//   addBalance: (id) => {},
//   removeBalance: (id) => {},
// });

// function BalanceContextProvider({ children }) {
//   const [balanceIds, setBalanceIds] = useState([]);

//   function addBalance(id) {
//     setBalanceIds((currentBalanIds) => [...currentBalanIds, id]);
//   }

//   function removeBalance(id) {
//     setBalanceIds((currentBalIds) =>
//       currentBalIds.filter((mealId) => mealId !== id)
//     );
//   }

//   const value = {
//     ids: balanceIds,
//     addBalance: addBalance,
//     removeBalance: removeBalance,
//   };

//   return <BalancesContext.Provider>{children}</BalancesContext.Provider>;
// }

// export default BalanceContextProvider;
