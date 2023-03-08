import React, { useState } from "react";
import style from '../../styles/formStyle.module.css';
import logo from '../../images/login_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

function GetLoginForm() {
    var loginStatus = false;
    const [isClick,setClickStatus] = useState(false);
    const [isHover,setHover] = useState(false);
    const [email,setEmailValue] = useState("");
    const [pass,setPWValue] = useState("");
    const [msg, setRegisterMessage] = useState("");
    const [emailError,setEmailError] = useState(""); 
    const [passwordType, setPasswordType] = useState("password");
    // const [PassError,setPWerror] = useState(""); 
    const navigate = useNavigate();

    function TogglePass() {
        if (passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }

    function ButtonClick() {
        setClickStatus(true);
        
        if (emailError === "") {
            fetch(process.env.REACT_APP_API_LINK + '/user/validate', {
            //fetch('http://127.0.0.1:5000/user/validate', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
                },
            body: JSON.stringify({
            email: email,
            password: pass,
            checkUserOnly: false,
                })
            })
            .then(response => response.json())
            .then(json => setRegisterMessage(json.message));
        }     
    }

    function CheckLoginStatus() {
        if (loginStatus === true) {
            navigate('/home',{state:{name:email}});
        } 
    }
    
    function MouseOver() {
        setHover(true);
    };
    
    function MouseOut() {
        setHover(false);
    }

    function UpdateEmail(event) {
        setEmailValue(event.target.value);

        if (/@uwaterloo.ca$/.test(event.target.value) == false)
        {
            setEmailError ("Please use a uwaterloo email");
        }
        else {
            setEmailError ("");
        }
    }

    function UpdatePass(event) {
        setPWValue(event.target.value);
        // if (/^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(event.target.value) == false)
        // {
        //     setPWerror ("Password needs to be at least 8 in length, one number, one upper case, one lower case and one special character");
        // }
        // else {
        //     setPWerror ("");
        // }
        //setRegisterMessage(JSON.stringify({email: Email, password: Pass,checkUserOnly: false,}));
    }

    React.useEffect(() => {
        if (msg == "success") {
            loginStatus = true;
        }

        if (msg == "fail") {
            setRegisterMessage("Email or Password incorrect");
        }

        CheckLoginStatus();
      }, [msg]);

    return (
        <div className={style.loginContainer}>
            {/* <form>  */}
                <img src={logo} alt=""></img>
                <h1>UWConnect</h1>
                <input type="text" placeholder="Email" onChange={UpdateEmail}/>
                <p className={style.errorMsg}>{emailError}</p>
                <input type={passwordType} style={{display:"inline-block"}} className={style.password} placeholder="Password" onChange={UpdatePass}/>
                <button className={style.togglePass} onClick={TogglePass}>
                    { passwordType==="password" ? <Icon.EyeSlash color="black" /> : <Icon.Eye color="black" /> }
                </button>
                <p className={style.errorMsg}>{msg}</p>
                {/* <p>{process.env.REACT_APP_API_LINK + '/user/validate'}</p> */}
                <button 
                    onClick={ButtonClick}
                    onMouseOver={MouseOver} 
                    onMouseOut={MouseOut}
                    onMouseUp={CheckLoginStatus}
                    style={{ backgroundColor : isHover ? "orange" : "black" }}
                >Login
                </button>
                <p style={{fontSize: "18px"}}>New User? <a href="/register" style={{color:"orange"}}>Register</a></p>
            {/* </form> */}
        </div>
    );
}

export default GetLoginForm;