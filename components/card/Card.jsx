import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from '../../pages/context'


export default function Card({ heroes }) {
    let description = useAppContext()
    return (
        <>
            {
                heroes ? heroes.map((hero, i) => {
                    return (
                        <div key={hero.id}>
                            <h1>{hero.name}</h1>
                            <Image
                                src={`${hero.thumbnail.path}/portrait_xlarge.jpg`}
                                alt="Picture of the hero"
                                width={200}
                                height={200}
                                unoptimized={true}
                            />
                            <Link href={`/HeroDetails/${hero.id}`}>
                                <a>More details</a>
                            </Link>
                            <p>{description ? description[i].description : ''}</p>
                        </div>)
                })
                    : ''}
        </>
    )
}