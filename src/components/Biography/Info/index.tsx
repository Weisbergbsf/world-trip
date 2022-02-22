import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri";

interface InfoProps {
    info: {
        name: string;
        total: number;
        cities?: []
    }
}

export function Info({ info }: InfoProps) {
    return (
        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Text color="yellow.400" fontWeight="500" fontSize={["2xl", "5xl"]}>{info.total}</Text>
            <Text color="gray.700" fontWeight="500" fontSize={["md", "xl"]}>
                {info.name}

                {info?.cities && (
                    <Tooltip hasArrow label={info.cities.join(', ')} >
                        <span>
                            <Icon
                                as={RiInformationLine}
                                ml="1"
                                color="gray.400"
                                w={["10px", "16px"]}
                                h={["10px", "16px"]}
                            />
                        </span>
                    </Tooltip>
                )}
            </Text>
        </Flex>
    );
}