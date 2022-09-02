import Card from '../components/card/Card.jsx'
import Container from '../components/container/Container'
import axios from 'axios'


export default function Heroes({ heroes }) {
    return (
        <Container>
            <Card heroes={heroes} />
        </Container>
    )
}

export async function getStaticProps() {
    const heroes = await axios('http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=66a8defb62c8a7db93d6c21af958ecd2&hash=f2008f578d691175eb5aefebaf52df1c')
    return {
        props: {
            heroes: heroes.data.data.results
        }
    }
}


