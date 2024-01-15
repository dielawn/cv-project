
export const CV = ({data}) => {   
   
    return (
        <>
         {/* header */}
        
            <div>
                <p>{data.info.name}</p>
                <p>{data.info.email}</p>
                <p>{data.info.phone}</p>
                <p>{data.info.address}</p>
            </div>
        {/* education */}    
        
            <div>
            <h3>Education</h3>
                <p>{data.education.school}</p>
                <p>{data.education.degree}</p>
                <p>{data.education.location}</p>
                <p>{data.education.start}</p>
                <p>{data.education.end}</p>
            </div>

        {/* experience */} 
            <div>
            <h3>Experience</h3>
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