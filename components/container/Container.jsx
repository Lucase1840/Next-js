import Navigation from '../navigation/Navigation.jsx'
import Head from 'next/head'
import Style from './Container.module.css'

export default function Container(props) {
    return (
        <div className={Style.container}>
            <Head>
                <title>Heroes Demo</title>
            </Head>
            <Navigation />
            <div>
                {props.children}
            </div>
        </div>
    )
}