import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

type NavPageLayoutProps = {
  label: string;
  children: React.ReactNode;
};

export default function NavPageLayout({ children, label }: NavPageLayoutProps) {
  return (
    <Box h="100%" bgColor="#EEEEF2">
      <Flex pt="1rem" pl="1rem" justifyContent="center" alignItems="center">
        <Box flex="1" display="flex" justifyContent="flex-start">
          <Link href="/dashboard">
            <Flex alignItems="center">
              <Box>
                <IoMdArrowRoundBack color="#000" size="25px" />
              </Box>
              <Text as="b" color="#000" fontSize="lg" ml="10px">
                Voltar
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box flex="1" display="flex">
          <Text as="b" fontSize="lg" color="#000" textTransform="uppercase">
            {label}
          </Text>
        </Box>
      </Flex>

      {children}
    </Box>
  );
}
