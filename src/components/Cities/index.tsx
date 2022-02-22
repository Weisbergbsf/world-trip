import { Avatar, Box, Heading, Image, Text, Wrap } from "@chakra-ui/react";

interface CitiesProps {
    title: string;
    cities: {
        country: string;
        city: string;
        url: string;
        flag: string;
    }[]
}

export function Cities({ title, cities }: CitiesProps) {
    return (
        <Box maxW={1160} mx="auto" mb="10" >
            <Heading fontSize={["2xl", "4xl"]} fontWeight="500" px={['1rem', '1rem', '1rem', '1rem', 0]}>
                {title}
            </Heading>

            <Wrap
                mt="2.5rem"
                spacing="10"
                px={['1rem', '1rem', '1rem', '1rem', 0]}
                justify={["center", "center", "center", "normal"]}

            >
                {cities.map(city => (
                    <Box key={city.city} maxW={256} borderRadius={4} overflow="hidden">
                        <Image src={city.url} alt={city.city} h="173px" w="100%" />
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            border="1px solid"
                            borderColor="yellow.300"
                            bg="white"
                            borderRadius={4}
                            p={6}
                        >
                            <Box>
                                <Text fontSize="xl" fontWeight="500">{city.city}</Text>
                                <Text color="gray.500" fontWeight="500">{city.country}</Text>
                            </Box>
                            <Avatar src={city.flag} name={city.country} w={30} h={30} />
                        </Box>
                    </Box>
                ))}

            </Wrap>
        </Box>
    );
}