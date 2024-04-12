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

function Assignment01_L04() {
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

    const filteredStudents = [];
    students.forEach((stud)=>{filteredStudents.push(stud)});
    const placementDetailRef = useRef();
    const placementListRef= useRef();
    const selectedStudent={ name:"", id:"", company:"", salary:"" }
    const studentHasBeenSelected=function(student){
        placementDetailRef.current.updateStudent(student);
    }
    
    const searchCriteriaChanged = (ev) =>{
        if(ev.currentTarget.value && ev.currentTarget.value.trim().length < 3) return;
        filteredStudents.splice(0, filteredStudents.length);
        for (let e = 0; e < students.length; e++) {
            if(students[e].company.toLowerCase().includes(ev.currentTarget.value.toLowerCase())){
                filteredStudents.push(students[e])
            }            
        }
        placementListRef.current.updateStudents(filteredStudents);
        selectedStudent.name=""
        selectedStudent.company=""
        selectedStudent.salary=""
        placementDetailRef.current.updateStudent(selectedStudent);
    }
    const newStudentData = {
        id:"",
        name:"",
        company:"",
        salary:"",
    }
    const addNewStudent = ()=>{
        students.push(newStudentData);
        filteredStudents.push(newStudentData);
        placementListRef.current.updateStudents(filteredStudents);
    }
    
    const updateID = (ev)=>{
        newStudentData.id = ev.currentTarget.value;
    }
    const updateName = (ev)=>{
        newStudentData.name = ev.currentTarget.value;
    }
    const updateCompany = (ev)=>{
        newStudentData.company = ev.currentTarget.value;
    }
    const updateSalary = (ev)=>{
        newStudentData.salary = ev.currentTarget.value;
    }
  return (
    <div>
        <h2>Lecture 3</h2>
        Filter by Company: <input type='text' onChange={searchCriteriaChanged} />
        <PlacementList students={filteredStudents} placementYear={placementYear} 
        whenStudentIsSelected={studentHasBeenSelected} ref={placementListRef} />
        <br></br> 
        <hr></hr>
        Student Form 
        <br></br> Id: <input type='text' onChange={updateID}/>
        <br></br> Name: <input type='text' onChange={updateName} />
        <br></br> Company: <input type='text' onChange={updateCompany} />
        <br></br> Salary: <input type='text' onChange={updateSalary}/>
        <br></br> <button type='button' onClick={addNewStudent}>+ Add</button>
        <hr></hr>
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
    updateStudents(students){
        this.setState({
            students:students
        });
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
                                <li key={indx} id={student.id} onClick={this.studentClickedHandler}>{student.name} ({student.company})</li>
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
        this.setState({
            student : student
        })
    }
    
    render(){
        return (
            <div>
                <p>Name : {this.state.student.name}<br></br>
                ID : {this.state.student.id}<br></br>
                Company : {this.state.student.company}<br></br>
                salary : {this.state.student.salary}</p>
            </div>
        )
    }
}
export default Assignment01_L04;
