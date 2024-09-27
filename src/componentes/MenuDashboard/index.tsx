import { Box, Center, GridItem, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type MenuProps = {
  label: string;
  path: string;
  alt: string;
  href: string;
};

type MenuDashboardProps = {
  menu: MenuProps;
};

export default function MenuDashboard({ menu }: MenuDashboardProps) {
  return (
    <GridItem>
      <Link href={menu.href}>
        <Box
          maxW="8.125rem"
          _hover={{
            bg: "rgba(222, 222, 223, 0.5)",
            borderRadius: "10px",
            borderColor: "blue.500",
          }}
          transition="all 0.3s ease"
          cursor="pointer"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt="1rem"
          >
            <Image
              src={menu.path}
              width="72"
              height="72"
              quality={100}
              priority={true}
              alt={menu.alt}
            />
          </Box>

          <Box>
            <Center>
              <Heading
                as="b"
                fontSize="xs"
                color="white"
                textShadow="1px 1px 1px black"
                textAlign="center"
              >
                {menu.label}
              </Heading>
            </Center>
          </Box>
        </Box>
      </Link>
    </GridItem>
  );
}
