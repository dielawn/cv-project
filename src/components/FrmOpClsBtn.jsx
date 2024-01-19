
export const OpenCloseBtn = ({category, isOpen, onClick}) => {

    let openCloseIcon = isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'

    return (
        <button  onClick={onClick}>
            <h2 className="formCategory">
                {category}
                <span className="material-symbols-outlined">{openCloseIcon}</span>
            </h2>
        </button>
    )
}