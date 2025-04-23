"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { services } from "./data";

export type ServiceType = keyof typeof services;

interface ServicesContextProps {
  selected: ServiceType;
  setSelected: (service: ServiceType) => void;
}

const defaultValue: ServicesContextProps = {
  selected: "Digital",
  setSelected: () => {},
};

export const ServicesContext =
  createContext<ServicesContextProps>(defaultValue);

export const useServices = () => useContext(ServicesContext);

export const ServicesProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<ServiceType>("Digital");

  return (
    <ServicesContext.Provider value={{ selected, setSelected }}>
      {children}
    </ServicesContext.Provider>
  );
};
