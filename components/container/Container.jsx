import Navigation from '../navigation/Navigation.jsx'
import Head from 'next/head'
import Style from './Container.module.css'
import { useState } from 'react'

export default function Container(props) {
    const [darkMode, setDarkMode] = useState(false);

    const handlebackgroundChange = (isDark) => {
        console.log('Renderice Container')
        setDarkMode(isDark)
    };

    return (
        <div className={darkMode ? Style.dark : Style.light}>
            <Head>
                <title>Heroes Demo</title>
            </Head>
            <Navigation setBackgroundColor={handlebackgroundChange} />
            <h1>Heroes Project</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}