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

function AppL3_1() {
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
  return (
    <div>
        <h2>Lecture 3</h2>
        <PlacementList students={students} placementYear="2021" />
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
        this.studentClickedHandler();
    }
    studentClickedHandler(){
        alert(this);
    }
    render(){
        return (
            <div>
                <h3>Placement Year {this.state.placementYear}</h3>
                <ul>
                    {
                        this.state.students.map(function(student, indx){
                            return (
                                <li key={indx} onClick={this.studentClickedHandler}>{student.name} </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default AppL3_1;
