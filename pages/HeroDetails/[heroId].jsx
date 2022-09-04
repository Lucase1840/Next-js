import Card from '../../components/card/Card.jsx'
import Container from '../../components/container/Container'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

export default function Heroes({ heroes }) {
    const [data, setData] = useState([]);
    const router = useRouter()
    const { heroId } = router.query
    console.log(router)

    useEffect(() => {
        let heroData = async () => {
            await axios(`http://gateway.marvel.com/v1/public/characters/${heroId}?ts=1000&apikey=66a8defb62c8a7db93d6c21af958ecd2&hash=f2008f578d691175eb5aefebaf52df1c`)
                .then(data => {
                    setData(data.data.data.results[0])
                })
        }
        heroData();
    }, [heroId])

    return (
        <Container>
            <h1>{data.name}</h1>
        </Container>
    )
}

// export async function getStaticProps() {
//     const heroes = await axios('http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=66a8defb62c8a7db93d6c21af958ecd2&hash=f2008f578d691175eb5aefebaf52df1c')
//     return {
//         props: {
//             heroes: heroes.data.data.results
//         }
//     }
// }

