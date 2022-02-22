import Head from "next/head";
import { Divider, Stack, Flex, Container, Text } from '@chakra-ui/react'

import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { GetStaticProps } from "next";
import { continents } from "../utils/mockDataContinents";

interface HomeProps {
  continents: {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    url: string;
  }[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head><title>Home | world trip</title></Head>

      <Container as="main" w="100%" mt={[50, 100]} maxWidth={1480} mx="auto" px={[0, 6]} >
        <Banner />
        <TravelTypes />
        <Stack bg="#47585B" w={90} mx="auto" mt="20">
          <Divider />
        </Stack>

        <Flex
          align="center"
          mx="auto"
          mt="12"
          direction="column"
          fontSize={["lg", "3xl", "4xl"]}
          fontWeight={500}
        >
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Flex>

        <ContinentsSlide continents={continents} />

      </Container>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      continents: continents
    }
  }
}
