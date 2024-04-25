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

const Assignment01_L08 = ()=>{
    const title = "placement List";
    const placementYear = 2024;
    const [showSTudentList, setShowStudentsList] = React.useState(true);
    const [showStudentAddForm, setShowStudentAddForm] = React.useState(false);
    const [studentDetails, setStudentDetails] = React.useState({});
    const changeViewTab = (ev)=>{
        if(ev.target.attributes['tab'].value == 'add'){
            setShowStudentsList(false);
            setShowStudentAddForm(true);
        }
        if(ev.target.attributes['tab'].value == 'view'){
            setShowStudentsList(true);
            setShowStudentAddForm(false);
        }
    }
    const addStudForm=(stud)=>{
        students.push(stud);
        setShowStudentsList(true);
        setShowStudentAddForm(false);
    }
    return( 
        <div>
            Task: When click on button take action accordingly
            <TitleComponent title={title} year={placementYear}/>
            <ToolBar changeViewTab={changeViewTab} />
            {showSTudentList && <StudentsList students={students} />}
            {showStudentAddForm && <StudentAddForm addStudForm={addStudForm} /> }
        </div>
    )
}

const TitleComponent = ({title, year})=>{
    return (
        <h3>Thinking Machine | {title} - {year} </h3>
    )
}
const ToolBar = ({changeViewTab})=>{
    const changeTab = (ev)=>{
        changeViewTab(ev);
    }
    return(
        <div>
            <hr></hr>
            <button type="button" onClick={changeTab} tab="add">Add Student</button>
            <button type="button" onClick={changeTab} tab="view">List Student</button>
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

const StudentAddForm = ({addStudForm})=>{
    const tempStudentDetails = {
        name:"",
        company:"",
        salary:"",
        type:"",
        contact:"",
        passing_year:""
    }
    const updateStudDetails = (ev)=>{
        let val = ev.target.attributes['name'].value;
        tempStudentDetails[val] = ev.target.value;
    }
    const submitThis = ()=>{
        addStudForm(tempStudentDetails)
    }
    return(
        <div>
            <h3>Add New Student</h3>
            <p>Name: <input type="text" onChange={updateStudDetails} name="name"/></p>
            <p>Company: <input type="text" onChange={updateStudDetails} name='company'/></p>
            <p>Salary: <input type="text" onChange={updateStudDetails} name='salary'/></p>
            <p>Salary Type: <input type="text" onChange={updateStudDetails} name='type'/></p>
            <p>Contact: <input type="text" onChange={updateStudDetails} name='contact'/></p>
            <p>Passing Year: <input type="text" onChange={updateStudDetails} name='passing_year'/></p>
            <button type="button" onClick={submitThis} >Add STudent</button>
        </div>
    )
}
export default Assignment01_L08