
export const CV = ({data}) => {   
   
    return (
        <div className="container">
         {/* header */}
        
            <header>
                <h2 className="name">{data.info.name}</h2>
                <p className="flex"><span className="material-symbols-outlined">mail</span>{data.info.email}</p>
                <p className="flex"><span className="material-symbols-outlined">call</span>{data.info.phone}</p>
                <p className="flex"><span className="material-symbols-outlined">location_on</span>{data.info.address}<br></br>
                {data.info.city}, {data.info.state}</p>
            </header>
        {/* education */}    
        
            <div className="educationDiv">
            <span className="material-symbols-outlined flex"><h3>school Education</h3></span>
                <p>{data.education.school}</p>
                <p>{data.education.degree}</p>
                <p>{data.education.location}</p>
                <p>{data.education.start}</p>
                <p>{data.education.end}</p>
            </div>

        {/* experience */} 
            <div className="experienceDiv">
            <span ><h3 className="material-symbols-outlined flex">work Experience</h3></span>
                <p>{data.experience.company}</p>
                <p>{data.experience.title}</p>
                <p>{data.experience.location}</p>
                <p>{data.experience.description}</p>
                <p>{data.experience.start}</p>
                <p>{data.experience.end}</p>
            </div>
        </div>
    )    
}