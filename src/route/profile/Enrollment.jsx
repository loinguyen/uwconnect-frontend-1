import React, {useState} from "react";
import style from '../../styles/formStyle.module.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Border } from "react-bootstrap-icons";





// type UserFormProps = {
//     program: string
//     admission_year: string
//     faculty: string
//     course: string
// }

let programList = [];
let facultyList = [];
let courseList = [];
let yearList = ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023"];
//const [programList, setProgramList] = useState([]);
        fetch(process.env.REACT_APP_API_LINK + '/enrollment')
        .then(response => response.json())
        .then(json => {programList = json.program; facultyList = json.faculty; courseList = json.course})
        //.then(json => programList = json.program)
        
        // .then(json => courseList = json.course)


function Enrollment({program,admission_year,faculty,course}){

    //const [facultyList, setFacultyList] = useState([]);
    
    //const [coureseList, setCoursesList] = useState([]);
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

    return (
       <div className={style.loginContainer}>
            <h1>Enrollment Info</h1>
            {/* <label>Faculty</label> */}
            <Select placeholder = "Faculty" styles={{menuList :(baseStyles, state) => ({...baseStyles,color: 'black'})}}  options = {facultyArray}  />
            {/* <input autoFocus  type="text" /> */}
            <label>{/*Admission Year*/}</label>
            <Select  placeholder = "Admission Year" styles={{menuList :(baseStyles, state) => ({...baseStyles,color: 'black'}),}}  options = {yearArray}  />
            <label>{/*Program*/}</label>
            <Select  placeholder = "Program" styles={{menuList :(baseStyles, state) => ({...baseStyles,color: 'black'}),}}  options = {programArray}  />
            <label>{/*Courses*/}</label>
            <Select isMulti placeholder = "Courses" styles={{menuList :(baseStyles, state) => ({...baseStyles,color: 'black'}),multiValue : (baseStyles, state) => ({...baseStyles,backgroundColor: 'orange'}) }} className="Select-box" options = {courseArray}  />

       </div>
       

    )


}

export default Enrollment;