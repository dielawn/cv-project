import { CreateForm } from "./CreateForm"

export const EducationForm = ({education, updateInfo}) => {

    const formInputs = ['school', 'degree', 'location', 'start', 'end'] 

    return (
        <div>
            <form>
                <h2>Education</h2>
               < CreateForm category='education' data={education} inputs={formInputs} updateInfo={updateInfo}/>
            </form>
        </div>
    )
} 