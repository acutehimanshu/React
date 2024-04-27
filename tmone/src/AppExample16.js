import React from "react";
const getStudents = ()=>{
    var promise = new Promise((resolve)=>{
        fetch('placements').then((response)=>{ return response.json();} ).then((students)=>{ resolve(students); });
    });
    return promise;
}
const AppExample16 = ()=>{
    const [activeMode, setActiveMode] = React.useState('view');
    const [Students, setStudents] = React.useState([]);
    React.useEffect(()=>{
        getStudents().then((s)=>{
            setStudents(s)
        });
    },[]);
    const onToolBarItemSelected = (item)=>{
        setActiveMode(item)
    }

    return(
        <div>
            <h1>Thinking Machines</h1>
            <ToolBar mode={activeMode} onItemSelected={onToolBarItemSelected} />
            {activeMode === 'view' && <StudentsListComponent Students={Students} />}
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
const StudentsListComponent = ({Students})=>{
    return (
        <div>
            <h2> Placements</h2>
            <hr></hr>
            {
                Students.map((student)=>{
                    return(
                        <div key={student.id}>
                            Name: {student.name}<br></br>
                            company: {student.company}<br></br>
                            package: {student.salary}<br></br>
                            Job Type: {student.palcementType}<br></br>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}

const StudentsAddComponent = ()=>{
    return (
        <div>
            Add Form
        </div>
    )
}
export default AppExample16