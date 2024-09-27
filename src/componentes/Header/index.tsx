"use client";
import { Flex, Spacer, Stack } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../Logo";
import DarkModeToogle from "./DarkModeToogle";
import ProfileAvatar from "./ProfileAvatar";

export default function Header() {
  return (
    <Flex
      layerStyle="card"
      width="auto"
      h="3rem"
      alignItems="center"
      boxShadow="md"
      p={5}
    >
      <Stack direction="row" w="full" alignItems="center">
        <Link href="/dashboard">
          <Logo />
        </Link>

        <Spacer display={{ md: "none" }} />

        <Spacer />

        <DarkModeToogle />
        <ProfileAvatar />
      </Stack>
    </Flex>
  );
}
