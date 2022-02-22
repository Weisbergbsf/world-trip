import { Grid, GridItem, Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

const travelTypes = [
    { id: "vida-noturna", description: "vida noturna", url: "/images/cocktail.svg", colSpan: [] },
    { id: "praia", description: "praia", url: "/images/surf.svg", colSpan: [] },
    { id: "moderno", description: "moderno", url: "/images/building.svg", colSpan: [] },
    { id: "classico", description: "clássico", url: "/images/museum.svg", colSpan: [] },
    { id: "e-mais", description: "e mais...", url: "/images/earth.svg", colSpan: [2, 2, 2, 1] },
    // others...
]

export function TravelTypes() {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    })

    return (
        <Grid
            mt={[4, 20]}
            maxWidth={1160}
            mx="auto"
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        >
            {travelTypes.map(type => (
                <GridItem key={type.id} colSpan={type.colSpan}>
                    <Flex direction={["row", "column"]} justify="center" align={["baseline", "center"]}>
                        {isMobile ?
                            <Image src={type.url} alt={type.description} /> :
                            <Box mr={2} bg="yellow.400" w={2} h={2} borderRadius="50%" />
                        }
                        <Text fontWeight="600" mt="6" fontSize={["md", "xl", "2xl"]}>{type.description}</Text>
                    </Flex>
                </GridItem>
            ))}
        </Grid>
    );
}