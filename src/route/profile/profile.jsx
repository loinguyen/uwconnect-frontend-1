import React, {useState} from "react";

import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useMultistepForm } from "../../components/MultistepForm.ts";
import Form1 from "./Form1";
import Form2 from "./Enrollment";
import Form3 from "./Form3";
import Form4 from "./Form4";
import GetProfileHobbies from "./hobbies";
import Enrollment from "./Enrollment";
import MultiStepProgressBar from "../../components/MultistepProgressBar";
import style from '../../styles/formStyle.module.css';
import logo from '../../images/login_logo.png';

// type FormData = {

//     firstName: string
//     lastName: string
//     age: string
//     program: string
//     admission_year: string
//     faculty: string
//     course: string
//     customtag: string
//     label1: string
//     label2: string

// }

const INITIAL_DATA  = {
    firstName:"",
    lastName:"",
    age:"",
    program:"",
    admission_year:"",
    faculty:"",
    course:"",
    customtag:"",
    label1:"",
    label2:"",

}

function Profile(){

    const [data,setData] = useState(INITIAL_DATA);
    const {steps, currentStepIndex, step,isFirstStep,isLastStep,back,next} = useMultistepForm([<Form1 {...data}/>,<Enrollment {...data}/>,<GetProfileHobbies {...data}/>,<Form4 {...data}/>]);
    const [isHover,setHover] = useState(false);
    const [isHover2,setHover2] = useState(false);

    function MouseOver() {
        setHover(true);
    }
    
    function MouseOut() {
        setHover(false);
    }

    function MouseOver2() {
        setHover2(true);
    }
    
    function MouseOut2() {
        setHover2(false);
    }

    function onSubmit(e){
        e.preventDefault();
        next();
    }

    return (
         
        
        <>
        <div class={style.logoContainer}>
            <div >
            <img className={style.profileLogo} src={logo}></img>
            </div>
            <div class={style.logoText}>
            <p >UWConnect</p>
            </div>
        </div>
        
        
        <div className={style.ProgressBar}><MultiStepProgressBar onPageNumberClick={currentStepIndex + 1}/></div>
        <form  onSubmit={onSubmit}>
            
            {/* <div className={style.profileContainer}> */}
                
                {/* <label>{currentStepIndex + 1} / {steps.length}</label> */}
            <div className={style.profileContainer}> {step}</div>
            {/* </div> */}
            
            
            {!isFirstStep && <button 
                    className={style.profileButtonBack}
                    type = "button"
                    style = {{ backgroundColor : isHover ? "orange" : "black",marginTop : 50, marginRight : 20,  }}
                    onMouseOver={MouseOver} 
                    onMouseOut={MouseOut}
                    onClick={back}

            >Back</button>}
             <button 
                    className={style.profileButtonNext}
                    type = "submit"
                    style = {{ backgroundColor : isHover2 ? "orange" : "black",marginTop : 50, right : isFirstStep ? "27.5%" : "0%"}}
                    onMouseOver={MouseOver2} 
                    onMouseOut={MouseOut2}
                    // onClick={next}
            >{isLastStep ? "Submit" : "Next"}</button>
            
        </form>
        </>

    );


}

export default Profile;