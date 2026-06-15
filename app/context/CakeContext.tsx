"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

import { CakeAction, CakeState } from "../types/cake";
import { cakeReducer, initialState } from "./cakeReducer";

type CakeContextType = {
  state: CakeState;
  dispatch: Dispatch<CakeAction>;
};

const CakeContext = createContext<CakeContextType | null>(null);

export function CakeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    cakeReducer,
    initialState
  );

  return (
    <CakeContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </CakeContext.Provider>
  );
}

export function useCakeContext() {
  const context = useContext(CakeContext);

  if (!context) {
    throw new Error(
      "useCakeContext must be used inside CakeProvider"
    );
  }

  return context;
}