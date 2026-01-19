import { Field, HStack, Input, InputGroup, Text, Link, Button, Flex } from "@chakra-ui/react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";

export function LoginForm() {
  return (
    <>
        <Flex>
            <Text color="blue" fontSize="1.5rem" fontWeight="bold">Bem-vindo. Por favor, identifique-se.</Text>
                <HStack>
                    <Field.Root required>
                        <Field.Label>
                            Email: <Field.RequiredIndicator />
                        </Field.Label>
                    <InputGroup startElement={<Mail />}>
                        <Input placeholder="seuemail@exemplo.com" />
                    </InputGroup>
                </Field.Root>
                <Field.Root required>
                    <Field.Label>
                        Senha: <Field.RequiredIndicator />
                    </Field.Label>
                    <InputGroup startElement={<Lock />}>
                        <Input placeholder="Senha" />
                    </InputGroup>
                </Field.Root>
            </HStack>
            <Link href="#" color="blue">Esqueceu sua senha?</Link>
            <Button colorPalette="blue">Cadastrar</Button>
            <Button>Entrar</Button>
        </Flex>
    </>
  );
}