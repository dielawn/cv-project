
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
            <span className="material-symbols-outlined flex topSpan"><h3 className="sectionHeader">school Education</h3></span>
            <p className="dateRange">{data.education.start} - {data.education.end}<br></br>{data.education.location}</p>
                <p>{data.education.school}</p>
                <p>{data.education.degree}</p>
                
            </div>

        {/* experience */} 
            <div className="experienceDiv">
            <span className="material-symbols-outlined flex topSpan" ><h3  className="sectionHeader" >work Experience</h3></span>
                <p>{data.experience.company}</p>
                <p>{data.experience.title}</p>
                <p>{data.experience.description}</p>
                <p className="dateRange">{data.experience.start} - {data.experience.end} <br></br>{data.experience.location}</p>
            </div>

            
        </div>
    )    
}