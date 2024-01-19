
export const CV = ({data}) => {   
  
   const HandleExperiences = () => {
        return data.experience.map((eachExp) => (          
                <div key={eachExp.company} className="experienceDiv">
                <p className="dataTxt"><span className="bName">{eachExp.company}</span><br></br>{eachExp.title}</p>
                <p className="descTxt">{eachExp.description}</p>
                <p className="dateRange">{eachExp.start} - {eachExp.end} <br></br>{eachExp.location}</p>
                </div>            
        ))
   }

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
            <p className="dataTxt"><span className="bName">{data.education.school}</span><br></br>{data.education.degree}</p>
                
            </div>

        {/* experience */} 
            < >            
            <span className="material-symbols-outlined flex topSpan" ><h3  className="sectionHeader" >work Experience</h3></span>
            <HandleExperiences />
            </>

        </div>
    )    
}