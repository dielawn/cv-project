import { CreateForm } from "./CreateForm"

export const ExperienceForm = ({experience, updateInfo}) => {
    console.log(experience)
    const formInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 

    return (
        <div>
            <form>
                <h2>Experience<span className="material-symbols-outlined">keyboard_arrow_down</span></h2>
               < CreateForm category='experience' data={experience} inputs={formInputs} updateInfo={updateInfo}/>
            </form>
        </div>
    )
} 
