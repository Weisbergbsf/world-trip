import { Flex, Grid, Text } from "@chakra-ui/react";
import { Info } from "./Info";

interface BiographyProps {
    continent: {
        description: string;
        infos: {
            id: number;
            name: string;
            total: number;
            cities?: []
        }[]
    }
}

export function Biography({ continent }: BiographyProps) {

    return (
        <Flex direction="column" maxW={1160} mx="auto" px={['1rem', '1rem', '1rem', '1rem', 0]} mb="10">
            <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]}>
                <Text
                    fontSize={["lg", "xl", "xl", "2xl"]}
                    color="gray.700"
                    textAlign="justify"
                >
                    {continent.description}
                </Text>

                <Flex justify="space-between">
                    {continent.infos.map(info => <Info key={info.id} info={info} />)}
                </Flex>

            </Grid>
        </Flex>
    );
}