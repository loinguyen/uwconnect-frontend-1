import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setFaculty, setYear, setProgram, setCourses } from '../../redux/profile/profileSlice'
import style from '../../styles/formStyle.module.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Border } from "react-bootstrap-icons";
import MultiSelectLargeList from "../../components/MultiSelectLargeList";

const selectStyle = {
    control: (base, state) => ({
      ...base,
      background: "#282c34",
      
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "white" : "white",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "white" : "white"
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      color: 'white',
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    
    menuList :(baseStyles, state) =>
     ({...baseStyles,
    
      color: 'black'}),
    singleValue: (base, state) => ({
        ...base,
        color: state.isFocused ? 'orange' : 'white'}),
    placeholder: (base, state) => ({
        ...base,
        color: 'white'}),
    multiValue : (baseStyles, state) => ({...baseStyles,backgroundColor: 'orange'})
    // input : base => ({color:"white"})  
    // valueContainer : base => ({color:"white"})
  };

// type UserFormProps = {
//     program: string
//     admission_year: string
//     faculty: string
//     course: string
// }

let programList = [];
let facultyList = [];
let courseList = [];
let yearList = ['1', '2', '3', '4', '5', '6', '7'];
//const [programList, setProgramList] = useState([]);
        fetch(process.env.REACT_APP_API_LINK + '/enrollment', { credentials: 'include' })
        .then(response => response.json())
        .then(json => {programList = json.program; facultyList = json.faculty; courseList = json.course})
        //.then(json => programList = json.program)
        
        // .then(json => courseList = json.course)


function Enrollment({program,admission_year,faculty,course}){
    //const [facultyList, setFacultyList] = useState([]);
    
    //const [coureseList, setCoursesList] = useState([]);
    const dispatch = useDispatch(); //This is used to store a value into Redux store

    const programVal = useSelector((state) => state.user.program); //retrieve value from Redux store and use as default
    const facultyVal = useSelector((state) => state.user.faculty);
    const yearVal = useSelector((state) => state.user.year);
    const courseVal = useSelector((state) => state.user.courses);
    const programArray = programList.map((program) => {return {"value" : program, "label": program }});
    const facultyArray = facultyList.map((faculty) => {return {"value" : faculty, "label": faculty }});
    const courseArray = courseList.map((course) => {return {"value" : course, "label": course }});
    const yearArray = yearList.map((year) => {return {"value" : year, "label": year }});
    
    // const [programList, setProgramList] = useState([]);
    //     fetch(process.env.REACT_APP_API_LINK + '/enrollment')
    //     .then(response => response.json())
    //     .then(json => setProgramList(json.program))

    //const programArray = [{ value: programList, label: programList }]
    // const programArray = programList.map((program) => {return {"value" : program, "label": program }});

    
    //console.log(programList);
    // function MakeList (X) {
    //         return <option>{X}</option>;
    //     };
    function handleFacultyChange(e) {
        dispatch(setFaculty(e.value));
    }

    function handleYearChange(e) {
        dispatch(setYear(e.value));
    }

    function handleProgramChange(e) {
        dispatch(setProgram(e.value));
    }

    function handleCourseChange(e) {
        dispatch(setCourses(Array.isArray(e) ? e.map(x => x.value) : []))
    }

    return (
       <div className="multiSelect">
            {/* <p >What are you enrolling in this term?</p> */}
            <br></br>
            {/* <label>Faculty</label> */}
            <Select
                defaultValue={facultyArray.filter(function(list) {
                    return list.value === facultyVal;
                })}
                placeholder="Faculty" 
                styles={selectStyle}  
                options={facultyArray} 
                onChange={handleFacultyChange}
            />
            {/* <input autoFocus  type="text" /> */}
            <label>{/*Admission Year*/}</label>
            <Select
                defaultValue={yearArray.filter(function(list) {
                    return list.value === yearVal;
                })}
                placeholder="Admission Year" 
                styles={selectStyle}  
                options={yearArray}  
                onChange={handleYearChange}
            />
            <label>{/*Program*/}</label>
            <Select
                defaultValue={programArray.filter(function(list) {
                    return list.value === programVal;
                })}
                placeholder="Program" 
                styles={selectStyle}  
                options={programArray} 
                onChange={handleProgramChange} 
            />
            <label>{/*Courses*/}</label>
            <MultiSelectLargeList
                class="multiSelect"
                placeholder="Courses"
                styles={selectStyle}
                defaultValue={courseArray.filter(obj => courseVal.includes(obj.value))}
                options={courseArray}
                onUpdate={handleCourseChange}
                maxHeight='180px'
            />
       </div>
       

    )


}

export default Enrollment;