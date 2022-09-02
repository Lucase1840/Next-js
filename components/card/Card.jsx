import Link from 'next/link'
import Image from 'next/image'

export default function Card({ heroes }) {
    return (
        <>
            {
                heroes.map((hero) => {
                    console.log(hero.thumbnail.path)
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
                            <Link href="/details">
                                <a>More details</a>
                            </Link>
                        </div>)
                })
            }
        </>
    )
}