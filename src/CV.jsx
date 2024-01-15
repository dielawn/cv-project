
export const CV = ({data}) => {   
   
    return (
        <>
         {/* header */}
        
            <header>
                <p>{data.info.name}</p>
                <p><span className="material-symbols-outlined">mail</span>{data.info.email}</p>
                <p><span className="material-symbols-outlined">call</span>{data.info.phone}</p>
                <p><span className="material-symbols-outlined">location_on</span>{data.info.address}</p>
            </header>
        {/* education */}    
        
            <div>
            <span className="material-symbols-outlined"><h3>school Education</h3></span>
                <p>{data.education.school}</p>
                <p>{data.education.degree}</p>
                <p>{data.education.location}</p>
                <p>{data.education.start}</p>
                <p>{data.education.end}</p>
            </div>

        {/* experience */} 
            <div>
            <span className="material-symbols-outlined"><h3>work Experience</h3></span>
                <p>{data.experience.company}</p>
                <p>{data.experience.title}</p>
                <p>{data.experience.location}</p>
                <p>{data.experience.description}</p>
                <p>{data.experience.start}</p>
                <p>{data.experience.end}</p>
            </div>
        </>
    )    
}