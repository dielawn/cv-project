import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"
import { useState } from "react"

export const EducationForm = ({education, updateInfo}) => {
    const [isFormOpen, setOpenClose] = useState(false)
    const formInputs = ['school', 'degree', 'location', 'start', 'end'] 

    const handleClick = () => {
        setOpenClose(!isFormOpen)        
    }

    return (
        <div>
             <OpenCloseBtn category='Education' isFormOpen={isFormOpen} onClick={handleClick} />
            <form className={isFormOpen ? "hide" : "visible"}>
               
                <div id="educationDiv">
               < CreateForm category='education' data={education} inputs={formInputs} updateInfo={updateInfo}/>
               </div>
            </form>
        </div>
    )
} 