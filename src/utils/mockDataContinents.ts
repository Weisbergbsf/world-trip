/* 
    países imagens: https://bigseventravel.com/locations/
    fonte flags: https://www.flaticon.com/br/buscar?word=flag+reino+unido
*/

export const continents = [
    {
        slug: "ameraica-do-sul",
        title: "América do Sul",
        subtitle: "O continente mais antigo.",
        url: "https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-12-at-14.31.46.png",
        description: "Brazil is famous for its vibrant culture, delicious cuisine and breathtaking natural landscape. The massive South American nation is on many a bucket list and it’s certainly not without reason. Whether you’re planning to visit the heart of the Amazon and samba or are just brushing up on your Brazilian trivia; here are some of Brazil’s most famous monuments.",
        infos: [
            { id: 1, name: "países", total: 12 },
            { id: 2, name: "línguas", total: 40 },
            {
                id: 3, name: "cidades +100", total: 27, cities: [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                ]
            },
        ],
        cities: [
            {
                country: "Brasil",
                city: "Rio de Janeiro",
                url: "https://bigseventravel.com/wp-content/uploads/2021/03/shutterstock_414527806-800x450.jpg",
                flag: "https://cdn-icons-png.flaticon.com/128/3909/3909370.png",
            },
        ]
    },
    {
        slug: "europa",
        title: "Europa",
        subtitle: "O continente mais antigo.",
        url: "https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-13-at-16.38.03.png",
        description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        infos: [
            { id: 1, name: "países", total: 50 },
            { id: 2, name: "línguas", total: 60 },
            {
                id: 3, name: "cidades +100", total: 27, cities: [
                    "Reino Unido",
                    "França",
                    "Itália",
                    "Republica Theca",
                    "Holanda",
                ]
            },
        ],
        cities: [
            {
                country: "Reino Unido",
                city: "Londres",
                url: "https://bigseventravel.com/wp-content/uploads/2022/02/Olympics-178x77.jpg",
                flag: "https://cdn-icons-png.flaticon.com/128/197/197374.png",
            },
            {
                country: "França",
                city: "Paris",
                url: "https://bigseventravel.com/wp-content/uploads/2022/02/Isle-de-Cite-178x77.jpg",
                flag: "https://cdn-icons-png.flaticon.com/128/197/197560.png",
            },
            {
                country: "Itália",
                city: "Roma",
                url: "https://bigseventravel.com/wp-content/uploads/2021/11/Vatican-178x77.jpg",
                flag: "https://cdn-icons-png.flaticon.com/128/323/323325.png",
            },
            {
                country: "Republica Theca",
                city: "Praga",
                url: "https://bigseventravel.com/wp-content/uploads/2021/03/krivoclat-178x77.jpg",
                flag: "https://cdn-icons-png.flaticon.com/128/321/321224.png",
            },
            {
                country: "Holanda",
                city: "Amsterdã",
                url: "https://bigseventravel.com/wp-content/uploads/2022/02/facts-about-amsterdam-1-178x77.jpeg",
                flag: "https://cdn-icons-png.flaticon.com/128/323/323275.png"
            }
        ],
    },
]