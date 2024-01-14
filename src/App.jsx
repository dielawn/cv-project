import { useState } from 'react'
import { PersonalInfoForm } from './components/PersonalForm'
import { defaultInfo } from "./example-cv";
import { CV } from './CV';
import './App.css'

function App() {
  const [person, setPerson] = useState(
    {
        name: defaultInfo.personal.name,
        email: defaultInfo.personal.email,
        phone: defaultInfo.personal.phone,
        address: defaultInfo.personal.address
    } )
const updateProperty = (property, value) => {
    setPerson((prevPerson) => ({...prevPerson, [property]: value}))
}

  return (
    <>

    <div className="formDiv flexColumn">
      <PersonalInfoForm person={person} updateProperty={updateProperty} />
    </div>
   
    <CV person={person}/>


    </>
  )
}

export default App
