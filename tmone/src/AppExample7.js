import React from "react";

const students = [
    {
      "id": 101,
      "name": "Aaditya",
      "company": "Google",
      "salary": "20LPA",
      "type": "fulltime",
      "contact": "aaditya@google.com",
      "passing_year": "2023"
    },
    {
      "id": 102,
      "name": "John",
      "company": "Microsoft",
      "salary": "18LPA",
      "type": "fulltime",
      "contact": "john@microsoft.com",
      "passing_year": "2023"
    },
    {
      "id": 103,
      "name": "Emily",
      "company": "Apple",
      "salary": "22LPA",
      "type": "fulltime",
      "contact": "emily@apple.com",
      "passing_year": "2023"
    },
    {
      "id": 104,
      "name": "Michael",
      "company": "Amazon",
      "salary": "19LPA",
      "type": "fulltime",
      "contact": "michael@amazon.com",
      "passing_year": "2024"
    },
    {
      "id": 105,
      "name": "Sophia",
      "company": "Facebook",
      "salary": "21LPA",
      "type": "fulltime",
      "contact": "sophia@facebook.com",
      "passing_year": "2024"
    },
    {
      "id": 106,
      "name": "William",
      "company": "Netflix",
      "salary": "17LPA",
      "type": "fulltime",
      "contact": "william@netflix.com",
      "passing_year": "2024"
    },
    {
      "id": 107,
      "name": "Olivia",
      "company": "Tesla",
      "salary": "25LPA",
      "type": "fulltime",
      "contact": "olivia@tesla.com",
      "passing_year": "2024"
    },
    {
      "id": 108,
      "name": "James",
      "company": "Twitter",
      "salary": "16LPA",
      "type": "fulltime",
      "contact": "james@twitter.com",
      "passing_year": "2024"
    },
    {
      "id": 109,
      "name": "Emma",
      "company": "Uber",
      "salary": "23LPA",
      "type": "fulltime",
      "contact": "emma@uber.com",
      "passing_year": "2024"
    },
    {
      "id": 110,
      "name": "Alexander",
      "company": "Intel",
      "salary": "24LPA",
      "type": "fulltime",
      "contact": "alexander@intel.com",
      "passing_year": "2024"
    }
];

const AppExample7 = ()=>{
    const title = "placement List";
    const placementYear = 2024;
    const [showSTudentList, setShowStudentsList] = React.useState(true)
    return( 
        <div>
            <TitleComponent title={title} year={placementYear}/>
            <ToolBar />
            {showSTudentList && <StudentsList students={students} />}
        </div>
    )
}

const TitleComponent = ({title, year})=>{
    return (
        <h3>Thinking Machine | {title} - {year} </h3>
    )
}
const ToolBar  = ()=>{
    return(
        <div>
            <hr></hr>
            <button type="button">+</button>
            <hr></hr>
        </div>
    )
}
const StudentsList  = ({students})=>{
    return (
        <div>
            {students.map((student)=>{
                return(
                    <StudentComponent key={student.id} student={student} />
                )
            })}
        </div>
    )
}

const StudentComponent = ({student})=>{
    return (
        <div>
            <span>Name: {student.name}</span><br/>
            <span>Company: {student.company}</span><br/>
            <span>salary: {student.salary}</span><br/>
            <span>salary Type: {student.type}</span><br/>
            <span>Contact: {student.contact}</span><br/>
            <span>Passing Year: {student.passing_year}</span><br/>
            <hr/>
        </div>
    )
}
export default AppExample7