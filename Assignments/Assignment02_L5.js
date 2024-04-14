import React from "react";
const Assignment01_L5 = ()=>{
    const [searchWhat, setSearchWhat] = React.useState("None");
    const [studentDetail, setStudentDetail] = React.useState({});
    const title = "Thinking Machine";
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
      
    const applyFilter = (ev)=>{
        setStudentDetail({});
        if(ev.currentTarget.value.length === 0){ 
            setSearchWhat('None'); 
            return
        }
        setSearchWhat(ev.currentTarget.value);
    }
    const filteredStudent = students.filter((student)=>{
        if(searchWhat == 'None') return true;
        return student.company.toLowerCase().includes(searchWhat.toLowerCase())
    });
    const showDetail = (ev)=>{
        let id = ev.currentTarget.getAttribute('id');
        var stud = students.filter((student)=>{
            if(student.id  == id) return true;
        });
        setStudentDetail(stud[0]);
    }
    return (
        <div>
            <h1>Lecture 5 Example 5</h1>
            <TitleComponent placementYear={2024} title={title}/>
            <FilterComponent applyFilter={applyFilter} />
            <p>Filter Applied: {searchWhat}</p>
            <StudentList students={filteredStudent} showDetail={showDetail}/>
            <StudentDetails student={studentDetail} />
        </div>
    )   
}
const TitleComponent = (props)=>{
    return (
        <h2>{props.title} | Placement Year {props.placementYear}</h2>
    )
}
const FilterComponent = (props)=>{
    const doSomething = (ev)=>{
        props.applyFilter(ev);
    }
    return (
        <div>
            FIlter data here: <input type="text" onChange={doSomething} />
        </div>
    )
}

const StudentList = (props)=>{
    const showDetails = (ev)=>{
        props.showDetail(ev);
    }
    return (
        <ul>
            {
            props.students.map((student)=>{
                return(
                    <li key={student.id} id={student.id} onClick={showDetails}>{student.name}  ({student.company}) </li>
                )
            })
            }
        </ul>
    )
}

const StudentDetails = (props)=>{
  console.log(props.student.id)
  return (
    <div key={props.student.id}>
      <p>Id: {props.student.id} </p>
      <p>Name: {props.student.name} </p>
      <p>company: {props.student.company} </p>
      <p>package: {props.student.salary} </p>
    </div>
  )
}
export default Assignment01_L5;