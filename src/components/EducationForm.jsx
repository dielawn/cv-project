import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"
import { useState } from "react"

export const EducationForm = ({education, updateInfo}) => {
    const [isFormOpen, setOpenClose] = useState(false)
    const formInputs = ['school', 'degree', 'location', 'start', 'end'] 

    let openCloseIcon = isFormOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'

    const handleClick = () => {
        setOpenClose(!isFormOpen)        
    }

    return (
        <div>
             <OpenCloseBtn category='Education' isFormOpen={isFormOpen} onClick={handleClick} openCloseIcon={openCloseIcon} />
            <form className={isFormOpen ? "visible" : "hide"}>               
                <div id="educationDiv">
               < CreateForm category='education' data={education} inputs={formInputs} updateInfo={updateInfo}/>
               </div>
            </form>
        </div>
    )
} 