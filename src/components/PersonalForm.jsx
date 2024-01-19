import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"
import { useState } from "react"

export const PersonalInfoForm = ({data, updateInfo}) => {
    const [isFormOpen, setOpenClose] = useState(false)
    const formInputs = ['name', 'email', 'phone', 'address']

    let openCloseIcon = isFormOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'

    const handleClick = () => {
        setOpenClose(!isFormOpen)        
    }

    return (
        <div>
            <OpenCloseBtn category='Personal Info' isFormOpen={isFormOpen} onClick={handleClick} openCloseIcon={openCloseIcon} />
            <form className={isFormOpen ? "visible" : "hide"}>
            <CreateForm category='info' inputs={formInputs} data={data} updateInfo={updateInfo} />           
            </form>
        </div>
    )
}