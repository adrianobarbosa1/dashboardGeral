import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";

export default function ThemeProviders({ children }: ChakraProviderProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
