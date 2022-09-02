import Link from 'next/link'
import Style from './Navigation.module.css'

export default function Navigation() {
    let navigationOptions = ['About', 'Heroes']
    return (
        <ul className={Style.navigationBar}>
            {navigationOptions.map((e, i) => {
                return (
                    <li key={i}>
                        <Link href={i === 0 ? '/' : `/${e}`}>
                            <a>{e}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};