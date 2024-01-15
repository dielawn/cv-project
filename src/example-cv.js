import uniqid from "uniqid";
export const defaultInfo = {
info: {
    name: 'John Smith', 
    email: 'jsmith@email.com', 
    phone: '555-555-5555', 
    address: '123 Secret Ln',  
    city: 'Seattle',
    state: 'WA',
    isHidden: false,
    id: uniqid(),
},
education: {
    degree: "Associates in Audio Engineering",
    school: "The Art Institute of Seattle",
    location: "Seattle, WA",
    start: "09/2002",
    end: "07/2004",
    isHidden: false,
    id: uniqid(),
  },
experience: [
  {
    company: "Avast Studios",
    title: "Intern",
    location: "Seattle, WA",
    description:
      "Make Coffee, Answer the phone, Clean, Occationally clean up after a session, Lorem Ipsum so on so forth etc... You know this is never going to wrap because my screen is very very very very wide. All work and no play makes jack a dull body",
    start: "08/2004",
    end: "10/2005",
    isHidden: false,
    id: uniqid(),
  },
  {
    company: "Vera Project",
    title: "assistant to assistant engineer",
    location: "Seattle, WA",
    description:
      "Set up mic stands, run cables and do initial sound check. Got pastries once for the staff from a day Proskey Proskey in pike place market they were a bit stale but still delicious, I never went there because the line was always way way way way too long.",
    start: "04/2003",
    end: "02/2005",
    isHidden: false,
    id: uniqid(),
  },
],

}
