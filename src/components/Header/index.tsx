import { Flex, Grid, GridItem, Image, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Header() {
    const [iconBack, setIconBack] = useState("/images/arrow-left.svg");
    const { asPath } = useRouter();
    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    })

    useEffect(() => {
        setIconBack(isMobile ? '/images/arrow-left.svg' : '/images/arrow-left-mobile.svg')
    }, [isMobile])

    return (
        <Flex
            as="header"
            width="100%"
            height={[50, 100]}
            mx="auto"
            align="center"
            justify="center"
            pos="fixed"
            top="0"
            bg="white"
            zIndex={10}
        >
            <Grid
                width="100%"
                maxWidth={1160}
                templateColumns='repeat(3, 1fr)'
                justifyContent="center"
                alignItems="center"
                mx={[6, 26, 36]}
            >
                <GridItem>
                    {asPath !== "/" &&
                        <Link href="/" >
                            <a>
                                <Image src={iconBack} alt="Voltar para home" />
                            </a>
                        </Link>
                    }
                </GridItem>
                <GridItem display="flex" justifyContent="center">
                    <Image w={[81, 184]} src="/images/logo.svg" alt="world trip" />
                </GridItem>
            </Grid>
        </Flex>
    )
}