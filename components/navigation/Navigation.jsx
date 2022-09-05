import Link from 'next/link'
import Style from './Navigation.module.css'
import useToggle from '../Toggle/useToggle'

export default function Navigation({ setBackgroundColor }) {
    const [toggleValue, setToggleValue] = useToggle(false);

    const navigationOptions = ['About', 'Heroes'];

    const handleBackgroundChange = () => {
        setBackgroundColor(!toggleValue)
        setToggleValue(!toggleValue)
    };

    console.log('Renderice Navigation')

    return (
        <>
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
            <div>
                <button onClick={handleBackgroundChange}>X</button>
                {toggleValue.toString()}
            </div>
        </>
    )
};