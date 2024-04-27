import React from "react";
const getStudentsList = ()=>{
    var promise = new Promise((resolve)=>{
        fetch('getStudents').then((response)=>{ return response.json(); }).then((students)=>{
            resolve(students);
        });
    });
    return promise;
}
const Assignment01_L12 = ()=>{
    const [activeMode, setActiveMode] = React.useState('view');
    const [students, setStudents] = React.useState({});
    const onToolBarItemSelected = (item)=>{
        alert(item);
        setActiveMode(item)
    }
    React.useEffect(()=>{
        getStudentsList().then((studs)=>{
            console.log(studs)
            setStudents(studs);
        });
    },[]);
    return(
        <div>
            <h1>Thinking Machines</h1>
            <ToolBar mode={activeMode} onItemSelected={onToolBarItemSelected} />
            {activeMode === 'view' && <StudentsListComponent students={students} />}
            {activeMode === 'add' && <StudentsAddComponent />}
        </div>
    )
}
const ToolBar = ({mode, onItemSelected}) =>{
    const takeAction = (ev)=>{
        onItemSelected(ev.currentTarget.getAttribute('target_value'))
    }
return(
    <div>
        <hr></hr>
        {mode === 'view' && <button type="button" onClick={takeAction} target_value='add'>Add</button>}
        {mode === 'add' &&  <button type="button" onClick={takeAction} target_value='view'>Cancle</button>}
        ... more items
        <hr></hr>
    </div>
)
}
const StudentsListComponent = ({students})=>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>company</th>
                    <th>Type</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                students.map((student)=>{
                    return (
                        <tr key={student.id}>
                            <td >{student.id} </td>
                            <td >{student.name} </td>
                            <td >{student.company} </td>
                            <td >{student.jobType} </td>
                            <td >{student.salary} {student.salaryType} </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}

const StudentsAddComponent = ()=>{
    return (
        <div>
            Add Form
        </div>
    )
}
export default Assignment01_L12