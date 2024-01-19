import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"
import { useState } from "react"
import { SelectBtns } from "./SelectBtns"
import { capFirstLetter } from "../utils"


const experienceInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 





export const Form = ({category, inputs, updateInfo }) => {
    const [isFormOpen, setOpenClose] = useState(false)
    let [selectedIndex, setSelected] = useState(0)

    const selectIndex = (index) => {
        setSelected(selectedIndex = index)
    }

  
    let openCloseIcon = isFormOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'

    const handleClick = () => {
        setOpenClose(!isFormOpen)        
    }

    const formInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 

    return (
        <div>
            <OpenCloseBtn 
                category='Experience' 
                isFormOpen={isFormOpen}  
                onClick={handleClick} 
                openCloseIcon={openCloseIcon}
            />
            
            <form className={isFormOpen ? "visible" : "hide"} >
                
                < CreateForm 
                    category='experience' 
                    inputs={formInputs} 
                    updateInfo={updateInfo}
                />
              
            </form>
            
        </div>
    )
}