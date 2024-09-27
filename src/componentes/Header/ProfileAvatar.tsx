import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiPower, FiSettings, FiUser } from "react-icons/fi";

export default function ProfileAvatar() {
  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <HStack spacing="4">
              <Avatar
                size="sm"
                // src='img/ney.jpg'
              >
                <AvatarBadge
                  boxSize="1.25em"
                  // bg={!!user ? "green.500" : "red.500"}
                  bg={"green.500"}
                />
              </Avatar>
            </HStack>
          </MenuButton>

          <MenuList>
            <Link href="/dashboard/profile">
              <MenuItem icon={<FiUser />}>Perfil</MenuItem>
            </Link>
            <Link href="/dashboard/config">
              <MenuItem icon={<FiSettings />}>Configuração</MenuItem>
            </Link>
            <MenuDivider />
            <MenuItem icon={<FiPower />}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}
