import React from "react";
const getStudents = ()=>{
    var promise = new Promise((resolve)=>{
        fetch('placements').then((response)=>{ return response.json();} ).then((students)=>{ resolve(students); });
    });
    return promise;
}
const Assignment01_L14 = ()=>{
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
    const [id,setId] = React.useState(0);
    const [name,setName] = React.useState("");
    const [company,setCompany] = React.useState("");
    const [salary,setSalary] = React.useState(0);
    const [salaryType,setSalaryType] = React.useState("");
    const [fulltimeChecked, setFulltimeChecked] = React.useState("checked");
    const [internChecked, setInternChecked] = React.useState("");
    const [placementType, setPlacementType] = React.useState("F");
    const [idError, setIdError] = React.useState("")
    const [nameError, setNameError] = React.useState("")
    const [companyError, setCompanyError] = React.useState("")
    const [salaryError, setSalaryError] = React.useState("")
    const idChange = (ev) =>{
        setId(ev.currentTarget.value);
    }
    const nameChange = (ev) =>{
        setName(ev.currentTarget.value);
    }
    const companyChange = (ev) =>{
        setCompany(ev.currentTarget.value);
    }
    const salaryChange = (ev) =>{
        setSalary(ev.currentTarget.value);
    }
    const salaryTypeChange = (ev) =>{
        setSalaryType(ev.currentTarget.value);
    }
    const placementTypeChanged = (ev)=>{
        if(ev.target.value == 'F' && ev.target.checked){
            setFulltimeChecked('checked');
            setInternChecked('')
            setPlacementType('F')
        }
        if(ev.target.value == 'I' && ev.target.checked){
            setFulltimeChecked('');
            setInternChecked('checked')
            setPlacementType('I')
        }
    }
    const validateId = (ev)=>{
        setIdError('');
        if(ev.target.value <= 0){
            setIdError(' * ');
        }
    }
    const validateName = (ev)=>{
        setNameError('');
        if(ev.target.value.trim().length == 0){
            setNameError(' * ');
        }
    }

    const validateCompany = (ev)=>{
        setCompanyError('');
        if(ev.target.value.trim().length == 0){
            setCompanyError(' * ');
        }
    }

    const validateSalary = (ev)=>{
        setSalaryError('');
        if(ev.target.value <= 0){
            setSalaryError(' * ');
        }
    }
    const clearAllErrors = ()=>{
        setIdError('');
        setNameError('');
        setCompanyError('');
        setSalaryError('');
    }
    const onClickHandler = ()=>{
        clearAllErrors();
        if(id == '' || id<=0 ) {
            setIdError(" * ");
        }
        if(name == '' ) {
            setNameError(" * ");
        }
        if(company == '' ) {
            setCompanyError(" * ");
        }
        if(salary == '' || salary<=0) {
            setSalaryError(" * ");
        }
        console.log(id);
        console.log(name);
        console.log(company);
        console.log(salary);
        console.log(salaryType);
        console.log(placementType);
    }
    return (
        <div>
            <h3>Add New student</h3>

            <label htmlFor="id">Id:</label>
            <input type="number" id="id" value={id} onChange={idChange} onInput={validateId}/>
            <span style={{color: "red"}}>{idError}</span>
            <br></br>
            <label htmlFor="name"> Name: </label>
            <input type="text" id="name" value={name} onChange={nameChange} onInput={validateName}/>
            <span style={{color: "red"}}>{nameError}</span>
            <br></br>
            <label htmlFor="company"> Company: </label>
            <input type="text" id="company" value={company} onChange={companyChange} onInput={validateCompany}/>
            <span style={{color: "red"}}>{companyError}</span>
            <br></br>
            <label htmlFor="salary">Salary:</label>
            <input type="number" id="salary" value={salary} onChange={salaryChange} onInput={validateSalary}/>
            <select id="salaryType" value={salaryType} onChange={salaryTypeChange}>
                <option value={'Y'}>Per Annum</option>
                <option value={'M'}>Per Month</option>
            </select>
            <span style={{color: "red"}}>{salaryError}</span>
            <br>
            </br>
            Placement type: 
            <input type="radio" value={'F'} id="fulltime" name="placementType" checked={fulltimeChecked}  onChange={placementTypeChanged} /> Fulltime 
            <input type="radio" value="I" id="internship" name="placementType" checked={internChecked} onChange={placementTypeChanged} /> Internship
            <br/>
            <button type="button" onClick={onClickHandler}>Add</button>
        </div>
    )
}
export default Assignment01_L14