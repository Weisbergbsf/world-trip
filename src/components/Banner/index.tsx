import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex width="100%" height={[163, 250, 250, 335]} bgImage="url('/images/background.svg')">
      <Flex w="100%" mx="auto" align="center" px={[4, 10, 15, 20, 36]} justify={['center', 'space-between']}>
        <Box>
          <Heading as="h1" color="gray.100" fontWeight="500" fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}>
            <Text as="span">5 continentes,</Text><br />
            <Text as="span">infinitas possibilidades.</Text>
          </Heading>
          <Text color="gray.300" mt="5" fontSize={["0.8rem", "xl"]} maxW={["100%", "100%", "100%", 550]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          width={[300, 300, 300, 430]}
          display={['none', 'none', 'block']}
          src="/images/airplane.svg"
          alt="Avião amarelo"
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  )
}