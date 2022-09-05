import useToggle from './useToggle'

export default function Toggle() {
    const [toggleValue, setToggleValue] = useToggle(false)

    return (
        <div>
            <button onClick={() => setToggleValue(!toggleValue)}>X</button>
            {toggleValue.toString()}
        </div>
    )

}