

export const CV = ({person}) => {   
    return (
        <>
         {/* header */}
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.phone}</p>
            <p>{person.address}</p>
        </>
    )    
}