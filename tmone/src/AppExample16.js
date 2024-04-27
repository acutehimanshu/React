import React from "react";

const AppExample16 = ()=>{
    const [activeMode, setActiveMode] = React.useState('view');
    const onToolBarItemSelected = (item)=>{
        alert(item);
        setActiveMode(item)

    }
    return(
        <div>
            <h1>Thinking Machines</h1>
            <ToolBar mode={activeMode} onItemSelected={onToolBarItemSelected} />
            {activeMode === 'view' && <StudentsListComponent />}
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
const StudentsListComponent = ()=>{
    return (
        <div>
            List of Students
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