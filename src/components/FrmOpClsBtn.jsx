import { useState } from "react"

export const OpenCloseBtn = ({category}) => {
    const [isOpen, setOpenClose] = useState(false)

    const handleClick = () => {
        setOpenClose(!isOpen)
    }

    return (
        <button onClick={handleClick}>{category}</button>
    )
}