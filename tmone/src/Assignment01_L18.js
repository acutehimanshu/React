import React from "react";
import progress from "./loader.gif"
const addStudent = (student)=>{
    var promise = new Promise((resolve)=>{
        const bodyString=`id=${student.id}&name=${encodeURIComponent(student.name)}&company=${encodeURIComponent(student.company)}&salary=${student.salary}&salaryType=${student.salaryType}&jobType=${student.placementType}`;
        console.log(bodyString);
        fetch("addPlacement", {
            "method":"POST",
            "headers":{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            "body":bodyString
        }).then((response)=>{return response.json(); }).then((response)=>{ resolve(response); });
    });
    return  promise;
}

const UpdateStudent =  (student)=>{
    var promise = new Promise((resolve)=>{
        const bodyString=`id=${student.id}&name=${encodeURIComponent(student.name)}&company=${encodeURIComponent(student.company)}&salary=${student.salary}&salaryType=${student.salaryType}&jobType=${student.placementType}`;
        console.log(bodyString);
        fetch("updateStudent", {
            "method":"POST",
            "headers":{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            "body":bodyString
        }).then((response)=>{return response.json(); }).then((response)=>{ resolve(response); });
    });
    return  promise;
}

const DeleteStudent = (id)=>{
    return new Promise((resolve)=>{
        fetch(`deleteStudent?id=${id}`).then((response)=>{return response.json(); }).then((response)=>{ resolve(response); });
    });
}

const getStudentById = (id)=>{
    return new Promise((resolve)=>{
        fetch(`getStudentById?id=${id}`).then((response)=>{return response.json(); }).then((response)=>{ resolve(response); });
    });
}
const getStudents = ()=>{
    return new Promise((resolve)=>{
        fetch('placements').then((response)=>{ return response.json();} ).then((students)=>{ resolve(students); });
    });
}
const AppExample16 = ()=>{
    const [activeMode, setActiveMode] = React.useState('view');
    const [Students, setStudents] = React.useState([]);
    const [studentDetails, setStudentDetails] = React.useState({
        company: "",
        id: 0,
        name: "",
        placementType: "F",
        salary: 0,
        salaryType: ""
    });
    React.useEffect(()=>{
        getStudents().then((s)=>{
            setStudents(s)
        });
    },[]);
    const onToolBarItemSelected = (item)=>{
        setActiveMode(item)
    }
    const onStudentAdded = (student)=>{
        if(student.placementType == "F") {student.placementType = "Full time";}
        if(student.placementType == "I") {student.placementType = "Internship";}
        if(student.salaryType == 'Y'){
            if(student.salary > 99000){
                student.salary = (student.salary/100000)+" Lakh Per Annum";
            }else{
                student.salary = (student.salary)+" Per Annum";
            }
        }else{
            if(student.salary > 99000){
                student.salary = (student.salary/100000)+" Lakh Per Month";
            }else{
                student.salary = (student.salary)+" Per Month";
            }
        }
        Students.push(student);
    }

    const setViewMode = ()=>{
        setActiveMode('view');
    }

    const deleteStudent = (ev)=>{
        let newStudentDetails = {
            id: ev.currentTarget.getAttribute('id'),
            name: ev.currentTarget.getAttribute('name'),
        }
        console.log(newStudentDetails);
        setStudentDetails(newStudentDetails)
        setActiveMode("delete");
    }

    const editStudent = (ev)=>{
        let id = ev.currentTarget.getAttribute('id');
        getStudentById(id).then((response)=>{
            setStudentDetails(response.data);
            setActiveMode("edit");
        });
    }

    const deleteStudentRecord = (ev)=>{
        let id = ev.currentTarget.getAttribute('id');
        DeleteStudent(id);
        setActiveMode("view");
        alert("Student Recored Delete. "); 
    }
    return(
        <div>
            <h1>Thinking Machines</h1>
            <ToolBar mode={activeMode} onItemSelected={onToolBarItemSelected} />
            {activeMode === 'view' && <StudentsListComponent Students={Students} deleteStudent={deleteStudent} editStudent={editStudent} />}
            {activeMode === 'add' && <StudentsAddComponent onStudentAdded={onStudentAdded} onDismiss={setViewMode} />}
            {activeMode === 'delete' && <StudentsDeleteComponent student={studentDetails} deleteStudentRecord={deleteStudentRecord} />}
            {activeMode === 'edit' && <StudentsEditComponent student={studentDetails} onDismiss={setViewMode}/>}
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
        {(mode === 'add' || mode === 'delete' || mode === 'edit') &&  <button type="button" onClick={takeAction} target_value='view'>Cancle</button>}
        ... more items
        <hr></hr>
    </div>
)
}

const StudentsDeleteComponent = ({student, deleteStudentRecord}) =>{
    const deleteThis = (ev)=>{
        deleteStudentRecord(ev);
    }
    console.log(student)
return(
    <div>
        <hr></hr>
        Student Details: <br></br>
        Id: {student.id}<br></br>
        Name: {student.name}<br></br>
        Do you want to delete record ?<br></br>
        <button type="button" onClick={deleteThis} id={student.id}>Yes</button>
        <hr></hr>
    </div>
)
}
const StudentsListComponent = ({Students, deleteStudent, editStudent})=>{
    const editThis = (ev)=>{
        editStudent(ev);
    }
    const deleteThis = (ev)=>{
        deleteStudent(ev);
    }
    return (
        <div>
            <h2> Placements</h2>
            <hr></hr>
            {
                Students.map((student)=>{
                    return(
                        <div key={student.id}>
                            Id: {student.id}<br></br>
                            Name: {student.name}<br></br>
                            company: {student.company}<br></br>
                            package: {student.salary}<br></br>
                            Job Type: {student.placementType}<br></br>
                            <button type="button" onClick={editThis} id={student.id}>Edit</button>&nbsp;&nbsp;
                            <button type="button" onClick={deleteThis} id={student.id} name={student.name} >Delete</button>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}

const StudentsAddComponent = ({onStudentAdded, onDismiss})=>{
    const [displayWhat, setDiaplsyWhat] = React.useState('formSection');
    const [id,setId] = React.useState(0);
    const [name,setName] = React.useState("");
    const [company,setCompany] = React.useState("");
    const [salary,setSalary] = React.useState(0);
    const [salaryType,setSalaryType] = React.useState("Y");
    const [fulltimeChecked, setFulltimeChecked] = React.useState("checked");
    const [internChecked, setInternChecked] = React.useState("");
    const [placementType, setPlacementType] = React.useState("F");
    const [idError, setIdError] = React.useState("")
    const [nameError, setNameError] = React.useState("")
    const [companyError, setCompanyError] = React.useState("")
    const [salaryError, setSalaryError] = React.useState("")
    const [messageError, setMessageError] = React.useState("")

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
        setMessageError('');
    }
    const clearForm = ()=>{
        setId('0');
        setName('');
        setCompany('');
        setSalary('0');
        setSalaryType('F');
        setFulltimeChecked('checked');
        setInternChecked('');
        setPlacementType('F');
    }
    const onClickHandler = ()=>{
        clearAllErrors();
        let hasError = false;
        if(id == '' || id<=0 ) {
            setIdError(" * ");
            hasError = true;
        }
        if(name == '' ) {
            setNameError(" * ");
            hasError = true;
        }
        if(company == '' ) {
            setCompanyError(" * ");
            hasError = true;
        }
        if(salary == '' || salary<=0) {
            setSalaryError(" * ");
            hasError = true;
        }
        if(hasError === true){
            return; 
        }
        console.log(id); console.log(name); console.log(company); console.log(salary); console.log(salaryType); console.log(placementType);
        let std = {
            id : id,
            name : name,
            company : company,
            salary : salary,
            salaryType : salaryType,
            placementType  : placementType,
        };
        setDiaplsyWhat('processing');
        addStudent(std).then((responseJson)=>{
            if(responseJson.success === true){
                onStudentAdded(std);
                clearForm();
                setDiaplsyWhat('addMoreSection');
            }else{
                setMessageError(responseJson.message);
                setDiaplsyWhat("formSection");
            }
        });

    }
    const yesHandler = ()=>{
        setDiaplsyWhat("formSection");
    }
    const noHandler = ()=>{
        onDismiss();
    }
    if(displayWhat == 'addMoreSection') return (
        <div>
            Add more? <br/>
            <button type="text" onClick={yesHandler}>Yes</button> &nbsp;
            <button type="text" onClick={noHandler}>No</button> 
        </div>
    )

    if(displayWhat == 'processing') return (
        <div>
            <img src={progress}/>
        </div>
    )
    if(displayWhat ==='formSection'){
    return (
        <div>
            <h3>Add New student</h3>
            <span style={{color:'red'}}>{
                messageError
            }</span>
            <br></br>
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
            <input type="radio" value={'F'} id="fulltime" name="placementType" checked={fulltimeChecked} onChange={placementTypeChanged} /> Fulltime 
            <input type="radio" value={"I"} id="internship" name="placementType" checked={internChecked} onChange={placementTypeChanged} /> Internship
            <br/>
            <button type="button" onClick={onClickHandler}>Add</button>
        </div>
    )
    }
}

const StudentsEditComponent = ({student, onDismiss})=>{
    console.log(student);
    const [id,setId] = React.useState(student.id);
    const [name,setName] = React.useState(student.name);
    const [company,setCompany] = React.useState(student.company);
    const [salary,setSalary] = React.useState(student.salary);
    const [salaryType,setSalaryType] = React.useState(student.salaryType);
    const [fulltimeChecked, setFulltimeChecked] = React.useState((student.placementType == 'F')?"checked":"");
    const [internChecked, setInternChecked] = React.useState((student.placementType == 'I')?"checked":"");
    const [placementType, setPlacementType] = React.useState(student.placementType);
    const [idError, setIdError] = React.useState("")
    const [nameError, setNameError] = React.useState("")
    const [companyError, setCompanyError] = React.useState("")
    const [salaryError, setSalaryError] = React.useState("")
    const [messageError, setMessageError] = React.useState("")

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
        setMessageError('');
    }

    const onClickHandler = ()=>{
        clearAllErrors();
        let hasError = false;
        if(id == '' || id<=0 ) {
            setIdError(" * ");
            hasError = true;
        }
        if(name == '' ) {
            setNameError(" * ");
            hasError = true;
        }
        if(company == '' ) {
            setCompanyError(" * ");
            hasError = true;
        }
        if(salary == '' || salary<=0) {
            setSalaryError(" * ");
            hasError = true;
        }
        if(hasError === true){
            return; 
        }
        let std = {
            id : id,
            name : name,
            company : company,
            salary : salary,
            salaryType : salaryType,
            placementType  : placementType,
        };

        UpdateStudent(std).then((responseJson)=>{
            alert("updated");
            onDismiss();
        });
    }



    return (
        <div>
            <h3>Update Student Form</h3>
            <span style={{color:'red'}}>{
                messageError
            }</span>
            <br></br>
            <label htmlFor="id">Id:</label>
            <input type="number" id="id" value={id} onChange={idChange} onInput={validateId} readOnly/>
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
            <input type="radio" value={'F'} id="fulltime" name="placementType" checked={fulltimeChecked} onChange={placementTypeChanged} /> Fulltime 
            <input type="radio" value={"I"} id="internship" name="placementType" checked={internChecked} onChange={placementTypeChanged} /> Internship
            <br/>
            <button type="button" onClick={onClickHandler}>Update</button>
        </div>
    )
}
export default AppExample16