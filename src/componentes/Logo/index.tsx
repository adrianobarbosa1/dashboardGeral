import { Image, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  const SwitchIconAnapolis = useColorModeValue(
    "https://api.anapolis.go.gov.br/apiupload/logo/prefeitura_azul.png",
    "https://api.anapolis.go.gov.br/apiupload/logo/prefeitura_branco.png"
  );

  return (
    <Image
      display={{ md: "flex" }}
      cursor="pointer"
      htmlWidth="100px"
      objectFit="cover"
      src={SwitchIconAnapolis}
      alt="logo Anápolis"
    />
  );
};

export default Logo;
