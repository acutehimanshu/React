import React, {Component, useRef} from 'react';
import './App.css';

class Student 
{
    constructor(id, name, company, salary){
        this.id=id;
        this.name=name;
        this.company=company;
        this.salary=salary;
    }
    getID(){ return this.id; }
    getName(){ return this.name; }
    getCompany(){ return this.company; }
    getSalary(){ return this.salary; }
}

function AppL3_4() {
    const students = [];
    const placementYear = 2021;
    students.push(new Student(101, "Aaditya", "Google", "20LPA"));
    students.push(new Student(102, "John", "Microsoft", "18LPA"));
    students.push(new Student(103, "Emily", "Apple", "22LPA"));
    students.push(new Student(104, "Michael", "Amazon", "19LPA"));
    students.push(new Student(105, "Sophia", "Facebook", "21LPA"));
    students.push(new Student(106, "William", "Netflix", "17LPA"));
    students.push(new Student(107, "Olivia", "Tesla", "25LPA"));
    students.push(new Student(108, "James", "Twitter", "16LPA"));
    students.push(new Student(109, "Emma", "Uber", "23LPA"));
    students.push(new Student(110, "Alexander", "Intel", "24LPA"));
    const placementDetailRef = useRef();
    const selectedStudent={
        name:"", 
        id:"", 
        company:"", 
        salary:""
    }
    const studentHasBeenSelected=function(student){
        alert(student.id+"-"+student.name+"-"+student.company+"-"+student.salary);
        console.log('passing student');
        console.log(student);
        placementDetailRef.current.updateStudent(student);
    }
    
    
  return (
    <div>
        <h2>Lecture 3</h2>
        <PlacementList students={students} placementYear={placementYear} 
        whenStudentIsSelected={studentHasBeenSelected} />
        <br></br> 
        <PlacementDetails student={selectedStudent}  ref={placementDetailRef}/>
     </div>
  );
}

class PlacementList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "students":props.students,
            "placementYear":props.placementYear
        }
        this.onStudentSelected = props.whenStudentIsSelected;
    }
    studentClickedHandler=(ev)=>{ // ev contains all information about event 
        var student = null
        var studentId = ev.currentTarget.getAttribute('id');
        for (let index = 0; index < this.state.students.length; index++) {
            if(this.state.students[index].id == studentId){
                student = this.state.students[index];
            break;
            }
        }
        if(student){
            this.onStudentSelected(student);
        }
    }
    render(){
        // const objRef = this; 
        return (
            <div>
                <h3>Placement Year {this.state.placementYear}</h3>
                <ul>
                    {
                        // this.state.students.map(function(student, indx){
                        //     return (
                        //         <li key={indx} onClick={objRef.studentClickedHandler}>{student.name} </li>
                        //     )
                        // })

                        this.state.students.map((student, indx)=>{
                            return (
                                <li key={indx} id={student.id} onClick={this.studentClickedHandler}>{student.name} </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

class PlacementDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            student : props.student
        }
    }
    updateStudent(student){
        alert('update got called')
        this.setState({
            student : student
        })
        console.log(student);
        console.log(this.state.student);
    }
    
    render(){
        return (
            <div>
                <p>Name : {this.state.student.name}</p>
                <p>ID : {this.state.student.id}</p>
                <p>Company : {this.state.student.company}</p>
                <p>salary : {this.state.student.salary}</p>
            </div>
        )
    }
}
export default AppL3_4;
