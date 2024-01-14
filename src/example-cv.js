import uniqid from "uniqid";
export const defaultInfo = {
personal: {
    name: 'John Smith', 
    email: 'jsmith@email.com', 
    phone: '555-555-5555', 
    address: '123 Secret Ln',  
    isHidden: false,
    id: uniqid(),
},
education: {
    degree: "Bachelors in Economics",
    schoolName: "Harvard University",
    location: "Massachusetts, US",
    startDate: "08/2020",
    endDate: "present",
    isHidden: false,
    id: uniqid(),
  },
experience: {

},

}
