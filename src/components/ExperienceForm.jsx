import { CreateForm } from "./CreateForm"

export const ExperienceForm = ({experience, updateInfo}) => {

    const formInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 

    return (
        <div>
            <form>
                <h2>Experience</h2>
               < CreateForm category='experience' data={experience} inputs={formInputs} updateInfo={updateInfo}/>
            </form>
        </div>
    )
} 