import { Box, Center, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { menuData } from "./menuData";

const Dashboard = () => {
  return (
    <Box
      margin="0"
      padding="0"
      overflow="hidden"
      backgroundColor="gray.100"
      backgroundImage="url('/images/background/martz.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="calc(100vh - 3rem)"
    >
      <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
        <Box width="100%" maxWidth="1200px" p="1rem">
          <SimpleGrid minChildWidth="80px" spacing="20px">
            {menuData.map((item) => (
              <GridItem key={item.id}>
                <Link href={item.href} passHref>
                  <Box
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
                        src={item.path}
                        width="72"
                        height="72"
                        quality={100}
                        priority={true}
                        alt={item.alt}
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
                          {item.label}
                        </Heading>
                      </Center>
                    </Box>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
