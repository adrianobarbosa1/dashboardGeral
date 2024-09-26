import Header from "@/componentes/Header";
import { Box } from "@chakra-ui/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
