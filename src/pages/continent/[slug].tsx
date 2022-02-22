import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { BannerContinent } from "../../components/BannerContinent";
import { Biography } from "../../components/Biography";
import { Cities } from "../../components/Cities";

import { continents } from "../../utils/mockDataContinents";

interface ContientProps {
    continent: {
        title: string;
        description: string;
        url: string;
        cities: {
            country: string;
            city: string;
            url: string;
            flag: string;
        }[],
        infos: {
            id: number;
            name: string;
            total: number;
            cities?: []
        }[]
    }
}

export default function Contient({ continent }: ContientProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Carrando...</h1>
    }

    return (
        <>
            <Head><title>{continent.title} | world trip</title></Head>

            <BannerContinent title={continent.title} url={continent.url} />
            <Biography continent={continent} />
            <Cities title="Cidades +100" cities={continent.cities} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = continents.map(continent => {
        return {
            params: {
                slug: continent.slug,
            },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    const continent = continents.find(item => item.slug === slug)

    return {
        props: {
            continent,
        }
    }
}