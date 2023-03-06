import React, { useState } from "react";
import style from '../../styles/formStyle.module.css';
import logo from '../../images/login_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'


function GetSignupForm(){
    //let history = useHistory();
    var RegisterStatus = false;
    const [jsonString, setjsonString] = useState("");
    const [isClick, setClickStatus] = useState(false);
    const [isHover, setHover] = useState(false);
    const [Pass, setPWValue] = useState("");
    const [Email, setEmailValue] = useState(""); 
    const [EmailError, setEmailError] = useState("");
    const [EmailCheckError, setEmailCheckError] = useState("");
    const [PassError, setPWerror] = useState(""); 
    const [ConfirmError, setConfirmerror] = useState(""); 
    const [ConfirmPW, setConfirmPWValue] = useState(false);
    const [Msg, setRegisterMessage] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const navigate = useNavigate();

    function TogglePass() {
        if (passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }

    function ToggleConfirmPass() {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text");
        } else {
            setConfirmPasswordType("password");
        }
    }

    function ButtonClick() {
        setClickStatus(true);
        
        if (EmailCheckError === "" && PassError === "" && ConfirmError == "") {
            fetch(process.env.REACT_APP_API_LINK + '/user/register', {
            //fetch('http://127.0.0.1:5000/user/register', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                email: Email,
                password: Pass,
                    })
                })
                .then(response => response.json())
                .then(json => setRegisterMessage(json.message));

            if (Msg != "success"){

            }
            //setRegisterMessage(JSON.stringify({email: Email, password: Pass}));
        }
    }

    function CheckRegisterStatus() {
        if (RegisterStatus === true) {
            navigate('/login');
        } 
    }
    
    function MouseOver() {
        setHover(true);
    };
    
    function MouseOut() {
        setHover(false);
    }

    function HandlePWChange(event) {
        setPWValue (event.target.value);

        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&+=])(?=.{8,}).*$/.test(event.target.value) == false)
        {
            setPWerror ("Password needs to be at least 8 in length, one number, one upper case, one lower case and one special character") ;
        }
        else {
            setPWerror ("") ;
        }

        //setRegisterMessage(JSON.stringify({email: Email, password: Pass}));
    }

    function OnConfirmChange(event) {
        if (event.target.value != Pass){
            setConfirmPWValue(false);
            setConfirmerror("Password does not match");
            event.target.setCustomValidity("Password does not match");
        }
        else {
            setConfirmPWValue(true);
            setConfirmerror("");
        }
    }

    function OnEmailChange(event) {
        setEmailCheckError("");
        setEmailValue(event.target.value);
        setRegisterMessage("");

        if (/@uwaterloo.ca$/.test(event.target.value) == false)
        {
            setEmailError("Please use a uwaterloo email");
        }
        else {
            setEmailError("");
        }
    }

    React.useEffect(() => {
        if (Msg == "exist") {
            setEmailCheckError("Email already exists");
        }
        if (Msg == "success") {
            RegisterStatus = true;
        }

        CheckRegisterStatus();
    }, [Msg]);

    return (
        <div className={style.loginContainer}>
            {/* <form>  */}
                <img src={logo}></img>
                <h1>UWConnect</h1>
                <input type="text" placeholder="Email" onChange={OnEmailChange}/>
                <p className={style.errorMsg}>{EmailError}</p>
                <input type={passwordType} style={{display:"inline-block"}} className={style.password} placeholder="Password" onChange={HandlePWChange} />
                <button className={style.togglePass} onClick={TogglePass}>
                    { passwordType==="password" ? <Icon.EyeSlash color="black" /> : <Icon.Eye color="black" /> }
                </button>
                <p className={style.errorMsg}>{PassError}</p>
                <input type={confirmPasswordType} style={{display:"inline-block"}} className={style.password} placeholder="Confirm  Password" onChange={OnConfirmChange} />
                <button className={style.togglePass} onClick={ToggleConfirmPass}>
                    { confirmPasswordType==="password" ? <Icon.EyeSlash color="black" /> : <Icon.Eye color="black" /> }
                </button>
                <p className={style.errorMsg}>{ConfirmError}</p>
                <p className={style.errorMsg}>{EmailCheckError}</p>
                {/* <p>{Msg}</p> */}
                <button 
                    onClick={ButtonClick}
                    onMouseOver={MouseOver} 
                    onMouseOut={MouseOut}
                    style={{ backgroundColor : isHover ? "orange" : "black"}}
                >Register
                </button>
                <p style={{fontSize: "18px"}}>Already have an account? <a href="/login" style={{color:"orange"}} >Login</a></p>
            {/* </form> */}
        </div>
    );


}

export default GetSignupForm;