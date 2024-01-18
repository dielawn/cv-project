import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"

export const EducationForm = ({education, updateInfo}) => {

    const formInputs = ['school', 'degree', 'location', 'start', 'end'] 

    return (
        <div>
            <form>
                < OpenCloseBtn category='Education' />
                <button><h2 className="formCategory">Education<span className="material-symbols-outlined">keyboard_arrow_up</span></h2></button>
                <div id="educationDiv">
               < CreateForm category='education' data={education} inputs={formInputs} updateInfo={updateInfo}/>
               </div>
            </form>
        </div>
    )
} 