import { useState } from 'react'
import { PersonalInfoForm } from './components/PersonalForm'
import { defaultInfo } from "./example-cv";
import { CV } from './CV';
import './App.css'
import { EducationForm } from './components/EducationForm';
import { ExperienceForm } from './components/ExperienceForm';
import { Form } from './components/Form';
import { SelectBtns } from './components/SelectBtns';

const personalInputs = ['name', 'email', 'phone', 'address']
const experienceInputs = ['company', 'title', 'location', 'description', 'start', 'end'] 
const educationInput = ['school', 'degree', 'location', 'start', 'end']


function App() {
  const [data, setData] = useState(
    {
      info:{
        name: defaultInfo.info.name,
        email: defaultInfo.info.email,
        phone: defaultInfo.info.phone,
        address: defaultInfo.info.address,
        city: defaultInfo.info.city,
        state: defaultInfo.info.state
      },
      education:{
        school: defaultInfo.education.school,
        degree: defaultInfo.education.degree,
        location: defaultInfo.education.location,
        start: defaultInfo.education.start,
        end: defaultInfo.education.end,
      },
      experience:[
        { 
        company: defaultInfo.experience[0].company,
        title: defaultInfo.experience[0].title,
        location:  defaultInfo.experience[0].location,
        description:  defaultInfo.experience[0].description,
        start: defaultInfo.experience[0].start,
        end: defaultInfo.experience[0].end,
      },
      { 
        company: defaultInfo.experience[1].company,
        title: defaultInfo.experience[1].title,
        location:  defaultInfo.experience[1].location,
        description:  defaultInfo.experience[1].description,
        start: defaultInfo.experience[1].start,
        end: defaultInfo.experience[1].end,
      },
    ]

      
    }
  )
    
 
const updateInfo = (category, property, value) => {
    setData((prevData) => ({
      ...prevData, 
      [category]: {
        ...prevData[category],
        [property]: value
      }
    }
  ))
}


  return (
    <>

    <div className="formDiv flexColumn">
      <PersonalInfoForm data={data.info} updateInfo={updateInfo} />
      <EducationForm education={data.education} updateInfo={updateInfo} />
      
      {data.experience.map((experience, index) => (
      

        <ExperienceForm key={index} experience={experience} updateInfo={updateInfo} />
      
      ))}
    </div>
   
    <div className="cvDiv">
      <CV data={data}/>
    </div>

    </>
  )
}

export default App
