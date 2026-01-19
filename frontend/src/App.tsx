import { Button, Heading, Text, VStack, Box } from "@chakra-ui/react";

export default function App() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
    >
      <Box
        w="100%"
        maxW="md"
        p={8}
        rounded="xl"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="whiteAlpha.200"
      >
        <VStack spacing={4} align="stretch">
          <Heading size="md" color="white">
            Setup OK
          </Heading>

          <Text color="whiteAlpha.800">
            Chakra UI v2 está ativo. Tailwind está aplicando o layout.
          </Text>

          <Button colorScheme="teal">Chakra OK</Button>
        </VStack>
      </Box>
    </Box>
  );
}
