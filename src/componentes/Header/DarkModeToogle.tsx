import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToogle() {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="sm"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      title={`Switch to ${text} mode`}
      variant="ghost"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
}
