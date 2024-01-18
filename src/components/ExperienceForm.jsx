import { CreateForm } from "./CreateForm"
import { OpenCloseBtn } from "./FrmOpClsBtn"

export const ExperienceForm = ({experience, updateInfo}) => {
  const eachEx =  experience.map((ex) => {
        console.log(ex)
        return ex
    })
    console.log(eachEx)
    const formInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 

    return (
        <div>
            <form>
            < OpenCloseBtn category='Experience' />
                <button><h2 className="formCategory">Experience<span className="material-symbols-outlined">keyboard_arrow_down</span></h2></button>
               < CreateForm category='experience' data={experience} inputs={formInputs} updateInfo={updateInfo}/>
            </form>
        </div>
    )
} 
