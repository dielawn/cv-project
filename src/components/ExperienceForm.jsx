import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"
import { useState } from "react"
export const ExperienceForm = ({experience, updateInfo}) => {

    const [isFormOpen, setOpenClose] = useState(false)
  const eachEx =  experience.map((ex) => {
        console.log(ex)
        return ex
    })
    console.log(eachEx)

    let openCloseIcon = isFormOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'

    const handleClick = () => {
        setOpenClose(!isFormOpen)        
    }

    const formInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 

    return (
        <div>
            <OpenCloseBtn category='Experience' isFormOpen={isFormOpen}  onClick={handleClick} openCloseIcon={openCloseIcon}/>
            <form className={isFormOpen ? "visible" : "hide"} >
                
                < CreateForm category='experience' data={experience} inputs={formInputs} updateInfo={updateInfo}/>
            </form>
        </div>
    )
} 
