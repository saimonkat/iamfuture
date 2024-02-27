"use client";
import React, { createContext, useState, ReactNode, useRef } from "react";

interface HeaderContextProps {
  activeHeader: boolean;
  setActiveHeader: (value: boolean) => void;
  headerRef?: React.MutableRefObject<HTMLDivElement | null>;
  email: string;
  setEmail: (value: string) => void;
}

interface HeaderProviderProps {
  children: ReactNode;
}

export const HeaderContext = createContext<HeaderContextProps>({
  activeHeader: true,
  setActiveHeader: () => {},
  email: "",
  setEmail: () => {},
});

export default function HeaderProvider({ children }: HeaderProviderProps) {
  const [activeHeader, setActiveHeader] = useState<boolean>(true);
  const headerRef = useRef<null | HTMLDivElement>(null);
  const [email, setEmail] = useState<string>("");

  return (
    <HeaderContext.Provider
      value={{ activeHeader, setActiveHeader, headerRef, email, setEmail}}
    >
      {children}
    </HeaderContext.Provider>
  );
}
