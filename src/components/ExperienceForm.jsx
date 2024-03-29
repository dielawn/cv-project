import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"
import { useState } from "react"
import { SelectBtns } from "./SelectBtns"

export const ExperienceForm = ({experience, updateInfo}) => {

    const [isFormOpen, setOpenClose] = useState(false)
    const formInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 

    let openCloseIcon = isFormOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'

    const handleClick = () => {
        setOpenClose(!isFormOpen)        
    }
console.log(experience)
    return (
        <div>
            <OpenCloseBtn 
                category={experience.company}
                isFormOpen={isFormOpen}  
                onClick={handleClick} 
                openCloseIcon={openCloseIcon}
            />
            
            <form className={isFormOpen ? "visible" : "hide"}>                
                < CreateForm 
                    category='experience' 
                    data={experience} 
                    inputs={formInputs} 
                    updateInfo={updateInfo}
                />
            </form>
            
        </div>
    )
} 
