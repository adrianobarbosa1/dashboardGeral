import NavPageLayout from "@/componentes/NavPageLayout";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <NavPageLayout label="Perfil">
      <Box p="1rem">
        <Flex p="1rem">
          <SimpleGrid columns={{ base: 1, md: 2 }} width="100%">
            <Flex direction={"column"} justify={"center"} p="1rem">
              <VStack>
                <Avatar size="2xl" src="https://bit.ly/broken-link" />
                <Button colorScheme="blue">Alterar foto</Button>
              </VStack>
            </Flex>

            <Card p="1rem" paddingTop={"3rem"}>
              <CardHeader>
                <Heading size="md">ADRIANO BARBOSA DOS SANTOS</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Matricula
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      27147
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Lotação
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      S. M. de Indústria, Comércio, Turismo e Modernização -
                      Gerência de Desenvolvimento de Sistemas.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Flex>

        {/* <Acordeon title="Dados Pessoais">
      <FormDadosPessoais />
    </Acordeon>
    <Acordeon title="Endereço">
      <FormEndereco />
    </Acordeon>
    <Acordeon title="Informações de Contato">
      <FormInfoContato />
    </Acordeon>
    <Acordeon title="Deficiência ou Condições específicas">
      <FormPCD />{" "}
    </Acordeon> */}
      </Box>
    </NavPageLayout>
  );
}
