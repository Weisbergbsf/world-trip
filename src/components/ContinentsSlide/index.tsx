import Link from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ContinentsSlideProps {
    continents: {
        slug: string;
        title: string;
        subtitle: string;
        description: string;
        url: string;
    }[]
}

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
    return (
        <Box mx="auto" mt="12" mb="10" width="100%" maxWidth={1240} height={450}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{ background: "#1C1401" }}
            >
                {continents.map(item => (
                    <SwiperSlide key={item.slug}>
                        <Flex justify="center" align="center" height={450} opacity="0.7" background="#1C1401">
                            <Image src={item.url} alt={item.title} />
                            <Box position="absolute" height={116} >
                                <Link href={`/continent/${item.slug}`}>
                                    <a>
                                        <Text
                                            color="gray.100"
                                            fontSize={48}
                                            fontWeight="600"
                                            textAlign="center"
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            color="gray.300"
                                            fontSize={24}
                                            fontWeight="600"
                                            textAlign="center"
                                        >
                                            {item.subtitle}
                                        </Text>
                                    </a>
                                </Link>
                            </Box>
                        </Flex>
                    </SwiperSlide>
                ))}

            </Swiper>
        </Box>
    );
}