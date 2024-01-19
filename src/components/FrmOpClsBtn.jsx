import { useState } from "react"

export const OpenCloseBtn = ({category, isOpen, onClick, openCloseIcon}) => {

    return (
        <button  onClick={onClick}>
            <h2 className="formCategory">
                {category}
                <span className="material-symbols-outlined">{openCloseIcon}</span>
            </h2>
        </button>
    )
}