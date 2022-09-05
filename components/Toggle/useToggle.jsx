import { useState } from 'react'

export default function useToggle(defaultValue) {
    const [toggleValue, setValue] = useState(defaultValue)

    function setToggleValue(value) {
        setValue(value)
    }

    return [toggleValue, setToggleValue]
}