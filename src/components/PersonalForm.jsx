import { CreateForm } from "./CreateForm"

export const PersonalInfoForm = ({data, updateInfo}) => {
    const formInputs = ['name', 'email', 'phone', 'address']
    return (
        <div>
            <form>
            <h2>Personal Info</h2>
            <CreateForm category='info' inputs={formInputs} data={data} updateInfo={updateInfo} />
           
            </form>
        </div>
    )
}