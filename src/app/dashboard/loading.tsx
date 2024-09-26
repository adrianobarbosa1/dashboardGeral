import { Box, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box
      display="flex" // Usando flexbox para centralização
      justifyContent="center" // Centraliza horizontalmente
      alignItems="center" // Centraliza verticalmente
      height="calc(100vh - 3rem)"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
}