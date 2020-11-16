import React from "react";
import { ChakraProvider } from "@chakra-ui/react"

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <ChakraProvider>
    {children}
  </ChakraProvider>
);

export default Provider;