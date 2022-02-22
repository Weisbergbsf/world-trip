import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinent {
    url: string;
    title: string;
}

export function BannerContinent({ url, title }: BannerContinent) {
    return (
        <Flex
            w="100%"
            maxW={1440}
            mx="auto"
            h={[150, 300, 500]}
            pt={[0, 0, 72]}
            px={[0, 0, 36]}
            align="center"
            justify={["center", "center", "flex-start"]}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgImage={`url('${url}')`}
        >
            <Heading
                as="h1"
                textAlign={["center", "left"]}
                fontSize={["1.75rem", "5xl"]}
                color="gray.100"
                fontWeight="500"
            >
                {title}
            </Heading>
        </Flex>
    )
}