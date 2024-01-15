import { CreateForm } from "./CreateForm"

export const EducationForm = ({education, updateInfo}) => {

    const formInputs = ['school', 'degree', 'location', 'start', 'end'] 

    return (
        <div>
            <form>
                <h2>Education<span className="material-symbols-outlined">keyboard_arrow_up</span></h2>
                <div id="educationDiv">
               < CreateForm category='education' data={education} inputs={formInputs} updateInfo={updateInfo}/>
               </div>
            </form>
        </div>
    )
} 